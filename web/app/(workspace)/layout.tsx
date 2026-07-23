"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Categories", href: "/categories" },
    { name: "Products", href: "/products" },
    { name: "Inventory", href: "/inventory" },
    { name: "Locations", href: "/locations" },
    { name: "Suppliers", href: "/suppliers" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,105,71,0.08)] flex justify-between items-center px-8 h-16 font-medium tracking-tight text-sm">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter text-emerald-800 dark:text-emerald-300"
          >
            Company Name
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors h-16 flex items-center ${
                    isActive
                      ? "text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-600"
                      : "text-slate-600 dark:text-slate-400 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined text-slate-600 block">
              Notifications
            </span>
          </button>
          <button className="p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined text-slate-600 block">
              Settings
            </span>
          </button>

          <div className="relative w-8 h-8 ml-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWRKHFbkBq99DldqYnJJvawG8v81-e2Yv9wHr9O7C7lbaxE3wL8Tq8HOZEHBHNunzr2enE9Kdr8NR2nlzpcLfSoYxv3HXcHkd-S5pyTOi-fYIdGhClDsYTxCEYWDNdkVMB1RYs26SJ9uJBxDorxxJ2T-nMxPxjmCtd0KVWESCZu0UjTd5CJ4RlYebEq2-PisUpZab3v3bNAubTtJsSdfzQQoWr1wJPn6RvwU62TN0Y_K9lmBdWe456kNdDsgfF11yOWWF6biCvE760"
              alt="User profile"
              fill
              className="rounded-full object-cover"
              unoptimized // Used since the URL is an external Google avatar string
            />
          </div>
        </div>
      </header>

      <div className="pt-16">{children}</div>
    </>
  );
}

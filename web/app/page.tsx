import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/dashboard");

  // Return null because the user will be redirected before anything renders
  return null;
}

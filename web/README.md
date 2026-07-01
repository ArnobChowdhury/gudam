# Ponno Tracker Frontend

## Development

Start the development server via Docker:

```bash
docker compose up web
```

Visit http://localhost:3000 to view the app.

## Utility Functions

### `cn(...classes)`

Located in `lib/utils.ts`. Merges Tailwind CSS classes intelligently, handling conditional styling and removing conflicts.

```tsx
import { cn } from "@/lib/utils"

// Conditional classes
<div className={cn("px-4", isActive && "bg-blue-500")} />

// Merging with shadcn/ui components
<Button className={cn("w-full", className)} />
```

Required dependencies: `clsx`, `tailwind-merge`, `lucide-react`
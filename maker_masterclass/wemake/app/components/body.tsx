import { Button } from "./ui/button"

export function Body() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Wemake</h1>
        <Button>Get Started</Button>
      </div>
    </div>
  )
} 
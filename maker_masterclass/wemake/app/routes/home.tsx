import type { Route } from "./+types/home";
import { Body } from "../components/body"
import { Button } from "../components/ui/button"

export function meta() {
  return [
    { title: "Wemake" },
    { description: "Welcome to Wemake" }
  ]
}

export default function Home() {
  return (
    <h1 className="text-gray-900 dark:text-white">
      home <Button>Click me</Button>
    </h1>
  );
  // return <Body />;
}

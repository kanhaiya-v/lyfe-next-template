import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button onClick={() => alert("Hello World!")}>Click Me!</Button>{" "}
    </div>
  );
}

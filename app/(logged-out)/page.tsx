import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />SupportMe
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </>
  )
}

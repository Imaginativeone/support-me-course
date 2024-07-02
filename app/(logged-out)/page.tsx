import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2">
        <PersonStandingIcon />SupportMe
      </h1>
      <Button>Log In</Button>
      <Button>Sign Up</Button>
    </>
  )
}

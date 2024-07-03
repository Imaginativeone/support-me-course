'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <>
      <PersonStandingIcon size={50} />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>
            Login
          </CardTitle>
          <CardDescription>
            Login to Your SupportMe Account
          </CardDescription>
        </CardHeader>
        <CardContent>
          login form
        </CardContent>
        <CardFooter className="justify-between">
          Don't have an account?
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return <div>
    <h1>Home Page</h1>
    <SignedOut>
      <SignUpButton>Sign Up</SignUpButton>
    </SignedOut>

    <SignedIn>
      <SignOutButton>Logout</SignOutButton>
    </SignedIn>
  </div>
}
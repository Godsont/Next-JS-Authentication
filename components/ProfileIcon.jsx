"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function ProfileIcon() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex gap-5">
        <Image
          src={session.user.image}
          width={40}
          height={40}
          className="rounded-full"
        />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return <button onClick={() => signIn("github")}>Sign In</button>;
}

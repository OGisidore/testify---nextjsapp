import { Neobutton } from "@/components/ui/NeonButton";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-0  w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <Neobutton className="">
        <Link href={"/"}>Sign In</Link>
      </Neobutton>
    </div>
  );
};

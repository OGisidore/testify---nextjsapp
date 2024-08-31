/* eslint-disable @next/next/no-img-element */
import { buttonVariants, Neobutton } from "@/components/ui/NeonButton";
import { cn } from "@/lib/utils";
import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "./icons/GithubIcon";
import { Section } from "./Section";

export const Headers = () => {
  return (
    <div className="w-full sticky top-0 py-4">
      <Section className=" flex items-baseline ">
        <h1 className="font-bold  text-lg text-foreground"> isidore.dev</h1>
        <div className="socials flex-1"/>
          <ul className=" ">
            <Link
              href={"/"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                " p-1 flex items-center  rounded-full   justify-center"
              )}
            >
              <GithubIcon size={18} className="text-foreground" />
            </Link>
            <Link
              href={"/"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "social flex items-center p-2 rounded-full   justify-center gradient"
              )}
            >
              <Twitter color="white" />
            </Link>
          </ul>
      </Section>
    </div>
  );
};

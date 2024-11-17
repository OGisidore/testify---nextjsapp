/* eslint-disable @next/next/no-img-element */
"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomIcon, GithubIcon } from "./icons/CusturmICon";
import { Section } from "./Section";
import DarkModeSwitcher from "./icons/DarkModeSwitcher";
import { buttonVariants } from "@/components/ui/button";

export const Headers = () => {
  return (
    <div className="w-full backdrop-blur-lg sticky z-50 top-0 py-4">
      <Section className=" flex items-baseline ">
        <h1 className="font-bold  text-lg text-foreground"> isidore-og</h1>
        <div className="socials flex-1"/>
          <ul className=" flex items-center gap-x-5 ">
            <DarkModeSwitcher/>
            <Link
              href={"/"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                " p-2 flex items-center  rounded-full   justify-center"
              )}
            >
              <GithubIcon size={18} className="text-foreground" />
            </Link>
            <Link
              href={"/"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "social flex items-center rounded-full p-2  justify-center "
              )}
            >
              <CustomIcon size={10} name="LinkedIn" className="" />
            </Link>
          </ul>
      </Section>
    </div>
  );
};


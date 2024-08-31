/* eslint-disable @next/next/no-img-element */
import { Neobutton } from "@/components/ui/NeonButton";
import { GithubIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div className="w-full md:max-w-6xl">
      
      <div
        className="presentation  flex max-md:flex-col
        items-start "
      >
        <div className="Profil flex-[2]">
          <h2 className="title text-5xl font-bold dark:text-foreground text-foreground">
            {" "}
            Isidore OGOULODO
          </h2>
          <h3 className=" mt-2 font-caption dark:text-foreground text-foreground text-3xl">
            {" "}
            Front-end developer{" "}
          </h3>
          <p className="description mt-4 text-2xl">
          I&apos;m a frontend developer with a passion for tackling coding challenges. I specialize in working with modern frameworks like React, Next.js, and TailwindCSS. I thrive on transforming ideas into reality through clean, efficient code. Let&apos;s collaborate and bring your vision to life!{" "}
          </p>
        </div>
        <div className="photo flex-[1]">
          <img src="/isidorei.png" alt="isidore photo " className=" w-full max-w-xs"/>
        </div>
      </div>
    </div>
  );
};

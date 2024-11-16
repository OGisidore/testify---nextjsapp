/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { CustomIcon } from "./icons/CusturmICon";

export const Hero = () => {
  return (
    <div className="w-full ">
      
      <div
        className="presentation  gap-8 justify-between md:flex max-md:flex-col
        items-center "
      >
        <div className="Profil flex-[2]">
          <h2 className="title text-3xl font-bold dark:text-foreground text-foreground">
            {" "}
            Isidore OGOULODO
          </h2>
          <h3 className=" mt-2 font-caption dark:text-muted-foreground  text-foreground text-2xl">
            {" "}
            Fullstack developer - Web designer - AI passionnate{" "}
          </h3>
          <p className="description mt-4 text-lg leading-9 font-medium">
          I&apos;m a fullstack developer passionnate about AI , coding challenges, and 3D integration. Skilled in {' '}
          <Code className="whitespace-nowrap"><CustomIcon name="React" size={16} className="inline mb-0.5 mr-0.5"/> React</Code>,{' '}
          <Code className="whitespace-nowrap"><CustomIcon name="TailwindCSS" size={16} className="inline mb-0.5 mr-0.5"/> Tailwind CSS </Code>,{' '}
          <Code className="whitespace-nowrap"><CustomIcon name="Nextjs" size={16} className="inline mb-0.5 mr-0.5"/> Next.js</Code>,{' '}
          <Code className="whitespace-nowrap"><CustomIcon name="Nodejs" size={16} className="inline mb-0.5 mr-0.5"/> Node.js</Code>,{' '}
          <Code className="whitespace-nowrap"><CustomIcon name="Django" size={16} className="inline mb-0.5 mr-0.5"/> Django</Code>,{' '}

          . I turn ideas into reality with <strong>clean</strong>, <strong>efficient,  and Scalable code</strong>. <br /> <br /> Let&apos;s collaborate and bring your vision to life!{" "}
          </p>
        </div>
        <div className="photo  flex items-end  justify-center md:justify-end h-full md:self-end flex-1">
          <Image height={250} width={250} src="/isidorei.png" alt="isidore photo " className=""/>
        </div>
      </div>
    </div>
  );
};


const Code =(props : PropsWithChildren< {className?:string}>) => {
  return (
    <span className={cn(`  -mx-0.5 rounded-md bg-accent/20 border-accent  border py-1 px-1  items-center ${props.className}`)}>{props.children}</span>
  )
}
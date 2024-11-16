/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { CustomIcon } from "./icons/CusturmICon";
import Link from "next/link";

export const Technos = () => {
    const technos = [
        {
            title: "Skilled Technos",
            technologies: [
                {
                    name: "React",
                    icon: "React",

                },
                {
                    name: "TypeScript",
                    icon: "TypeScript",
                },
                {
                    name: "Next.js",
                    icon: "Nextjs",
                },
                {
                    name: "Bootstrap",
                    icon: "Bootstrap",

                },
                {
                    name: "Node.js",
                    icon: "Nodejs",

                },
                {
                    name: "Javascript",
                    icon: "Javascript",
                },
                {
                    name: "Tailwind CSS",
                    icon: "TailwindCSS",
                },
                {
                    name: "Figma",
                    icon: "Figma",
                },
                {
                    name: "Django",
                    icon: "Django",

                }
            ]


        },
        {
            title: "Learning",
            technologies: [
                {
                    name: "Threejs",
                    icon: "Threejs",

                },

                {
                    name: "Flutter",
                    icon: "Flutter",
                },
                {
                    name: "Ionic",
                    icon: "Ionic",

                },
                // {
                //     name: "Laravel",
                //     icon: <img src="/path/to/laravel-icon.svg" alt="Laravel" />
                // },
                // {
                //     name: "Symfony",
                //     icon: <img src="/path/to/symfony-icon.svg" alt="Symfony" />
                // }
            ]
        }
    ]

    const myWorks = [
        {
            company : "Espero Soft Informatique",
            position : "Fullstack Developer",
            logo : "/238792861649372192455648606041224057082499141688715851585.png",
            date : "Feb 2024 - present",
            chalenge : false,
            website : "https://espero-soft.com"
        },
        {
            company : "LabLab AI Hackathon",
            logo : "https://lablab.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flablab-logo.8496f44c.png&w=48&q=75",
            position : "Fullstack Developer and AI-models Integration",
            chalenge : true,
            date : "Aout 2024 - Present",
            website : "https://lablab.ai"
        },
        {
            company : "CFP Le Savoir-faire",
            logo : "https://app.cfplesavoirfaire.com/assets/images/logo.png",
            position : "Insurance Teacher",
            chalenge : false,
            description : "I worked",
            date : "Sept 2023 - Present",
            website : "https://app.cfplesavoirfaire.com/"
        }


        
    ]
    return (
        <div className="w-full  md:flex mt-24   border-border gap-2">
            <div className="skills flex-[2] p-2 border border-border ">

                <h2 className="text-2xl font-bold "> My Skills </h2>
                <div className="skills-content md:flex mt-9 justify-between">
                    {technos.map((category, index) => (
                        category.title === "Skilled Technos" ? (
                            <div key={index} className="mb-5 space-y-8">
                                <h3 className="text-xl font-semibold mb-3"> I already work with</h3>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-4 gap-x-10 gap-2">
                                    {category.technologies.map((tech: any, techIndex: any) => (
                                        <div key={techIndex} className="flex  gap-2 items-center">
                                            <div className="w-5 h-5 mb-2">
                                                <CustomIcon name={tech.icon} size={25} />
                                            </div>
                                            <p className="text-center text-nowrap">{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div key={index} className="mb-5 space-y-8 ">
                                <h3 className="text-xl font-semibold text-nowrap mb-3">I&apos;m Learning</h3>
                                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
                                    {category.technologies.map((tech: any, techIndex: any) => (
                                        <div key={techIndex} className="flex  gap-2 items-center">
                                            <div className="w-5 h-5 mb-2">
                                                <CustomIcon name={tech.icon} size={25} />
                                                </div>
                                            <p className="text-center">{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}

                </div>
                

            </div>
            <div className="Mywork border rounded-md  bg-border relative flex-1">
                    <h2 className="text-2xl p-2  font-bold"> My Works </h2>
                    <div className="mt-9">
                        {myWorks.map((work, index) => (
                            <Link href={work.website} key={index} className="flex relative hover:bg-background  gap-2 p-2 border-background border-y">
                                <div className={`w-10 h-10 ${work.company === "LabLab AI Hackathon" || work.company === "CFP Le Savoir-faire"  ? "bg-white" : ""}`}>
                                    <Image src={work.logo} alt={work.company} className="" width={40} height={40} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg text-nowrap font-semibold">{work.company}</h3>
                                    <p className="text-sm font-semibold text-primary-foreground">{work.position}</p>
                                    <p className="text-sm text-muted-foreground">{work.date}</p>
                                    {work.chalenge && (
                                        <span className="inline-block absolute top-5 -right-5 rotate-45 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            Challenge
                                        </span>
                                    )}
                                    {/* <p className="text-sm text-muted-foreground">{work.chalenge ? "Chalenge" : ""}</p> */}
                                   
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className=" border-t rounded-b-md bg-background flex gap-3 p-2 w-full bottom-0 left-0">
                        <Link className="p-2 hover:bg-muted rounded-full" href={"https://github.com/OGisidore"}>
                        <CustomIcon name="Github" size={25} />
                        </Link>
                        <Link className="p-2 hover:bg-muted rounded-full" href={"https://www.linkedin.com/in/isidore-ogoulodo-677667209/"}>
                        <CustomIcon name="LinkedIn" size={25} />
                        </Link>
                        <Link className="p-2 hover:bg-muted rounded-full" href={"https://x.com/IOgoulodo"}>
                        <CustomIcon name="X" size={25} />
                        </Link>
                    </div>


                </div>


        </div>
    );
};

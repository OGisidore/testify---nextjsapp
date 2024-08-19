/* eslint-disable @next/next/no-img-element */
            import Link from "next/link"
import React from "react"

export const  Logo=()=>{
    return(
        <Link href={"/"}>
            <div className="hover:opacity-75 transition  gap-x-2 hidden md:flex items-center ">
            <img src="logo.svg" alt="logo" height={30} width={30} />
            <p className="text-lg text-neutral-700  pb-1 ">Testify</p>
            </div>
        </Link>
    )
}
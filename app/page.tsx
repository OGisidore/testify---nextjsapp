// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Neobutton } from "@/components/ui/NeonButton";
import { cn } from "@/lib/utils";
import { Medal, MessagesSquare } from "lucide-react";
import {  Poppins } from "next/font/google";
import Link from "next/link";
import { Headers } from "./_components/Headers";
import { Hero } from "./_components/Hero";
import { Section } from "./_components/Section";
import { Technos } from "./_components/Technos";
import Portfolio from "./_components/portfolio";
import Certification from "./_components/Certification";
import Footer from "./_components/Footer";
const exampleFont = Poppins({
  subsets : ["latin"],              
  weight: ["100", "200"]
})
export default function marketingPage() {
  return (
    <main>
         <Headers/>
         <Section className="mt-10">
         <Hero/>
         <Technos/>
         <Portfolio/>
         <Certification/>

         </Section>
         <Footer/>
          {/* <footer className="bg-gray-800 text-white py-4">
              <div className="container mx-auto text-center">
                  <p>&copy; {new Date().getFullYear()} Isidore OGOULODO. All rights reserved.</p>
                  <div className="mt-2">
                      <a href="" className="text-gray-400 hover:text-white mx-2">GitHub</a>
                      <a href="" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
                      <a href="" className="text-gray-400 hover:text-white mx-2">Twitter</a>
                  </div>
              </div>
          </footer> */}
         {/* <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-7xl font-bold text-center">Welcome to Isidore.dev</h1>
            <p className="text-center text-2xl">A place for developers to learn, grow and connect</p>
            <div className="flex space-x-4 mt-4">
              <Link href="/login">
                <Neobutton>
                  Login
                </Neobutton>
              </Link>
              <Link href="/register">
                <Neobutton>
                  Register
                </Neobutton>
              </Link>
            </div>
          </div> */}
    </main>
  );
}

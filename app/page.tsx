"use client"
import {  Poppins } from "next/font/google";
import { Headers } from "./_components/Headers";
import { Hero } from "./_components/Hero";
import { Section } from "./_components/Section";
import { Technos } from "./_components/Technos";
import Portfolio from "./_components/portfolio";
import Certification from "./_components/Certification";
import Footer from "./_components/Footer";
import { useState, useEffect } from "react";
import Loader from "./_components/Loader";
const exampleFont = Poppins({
  subsets : ["latin"],              
  weight: ["100", "200"]
})

export default function marketingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Cleanup
  }, []);
  return (
    <>
    {
      loading ? <Loader /> : (
         <main className="h-full">
          {/* <Scene/> */}
         <Headers/>
         <Section className="mt-10">
         <Hero/>
         <Technos/>
         <Portfolio/>
         <Certification/>

         </Section>
     

         <Footer/>
         
         
    </main>
      )
    }
    </>
    
   
  );
}

import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";
import {  Poppins } from "next/font/google";
import Link from "next/link";
const exampleFont = Poppins({
  subsets : ["latin"],              
  weight: ["100", "200"]
})
export default function marketingPage() {
  return (
    <div className=" flex items-center justify-center  flex-col ">
      <div className={ cn("flex items-center justify-center flex-col",exampleFont.className)}>
        <div className="flex mb-4 border shadow-sm rounded-full bg-amber-100 text-amber-700 p-4 uppercase items-center">
          <Medal className="w-6 h-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className=" text-3xl md:text-6xl texte-center text-neutral-800 mb-6">
          Testify helps team move
        </h1>
        <div className="text-3xl md:text-6xl  text-white px-4 p-2 pb-4 rounded-md w-fit mb-6 bg-gradient-to-r from-fuchsia-600 to-pink-600">
           work forward
        </div>
      </div>
      <div className="text-center text-sm md:text-xl text-neutral-400 mt-4  max-w-xs  md:max-w-2xl mx-auto">
        Collaborate , manage Projects and reach new productivity peaks,
         from high rises to the home office , the way your team works is unique - accomplish it all with  Testify  
      </div>
{/* Call the component call button from shadcn-ui by type on your terminal the command bellow : npm shadcn-ui@latest add button. After install this component you can call it and you also have capabilitties to change appearance of the these component    */}
     <button className="mt-6" >
      {/* size="lg" asChild */}
      <Link href={"/sign-up"}>
      Get Testify for free 
      </Link>
     </button>
    </div>
  );
}

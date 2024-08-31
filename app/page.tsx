// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Neobutton } from "@/components/ui/NeonButton";
import { cn } from "@/lib/utils";
import { Medal, MessagesSquare } from "lucide-react";
import {  Poppins } from "next/font/google";
import Link from "next/link";
import { Headers } from "./_components/Headers";
const exampleFont = Poppins({
  subsets : ["latin"],              
  weight: ["100", "200"]
})
export default function marketingPage() {
  return (
    <main>
         <Headers/>
    </main>
  );
}

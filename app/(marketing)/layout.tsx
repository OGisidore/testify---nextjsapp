
import { Headers } from "../_components/Headers";
import {Hero,} from "../_components/Hero"
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className='h-full flex flex-col items-center dark:bg-background'>
        {/* Navbar */}
        <Headers/>
        <Hero/>
        <main className="pt-40 select-none pb-20 ">
          {children}
        </main>
        
      </div>
    
  );
}

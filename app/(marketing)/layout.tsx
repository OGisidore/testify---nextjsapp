
import {Navbar} from "./_components/navbar"
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className='h-full bg-slate-100'>
        {/* Navbar */}
        <Navbar/>
        <main className="pt-40 select-none pb-20 bg-slate-100 "        >
          {children}
        </main>
        
      </div>
    
  );
}

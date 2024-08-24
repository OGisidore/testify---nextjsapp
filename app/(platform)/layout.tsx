import { ClerkProvider } from "@clerk/nextjs";

 function PlatformLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <ClerkProvider>
         {children}
      </ClerkProvider>
    );
  }
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Resource Hub",
  description: "Resource sharing platform",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link 
            rel="icon" 
            href="https://img.icons8.com/?size=100&id=Sp5Wxo7V9G0k&format=png&color=000000" 
            type="image/png" 
          />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}


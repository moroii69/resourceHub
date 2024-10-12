import type { Metadata } from "next";
import "./globals.css";

// Define the props type for RootLayout
interface RootLayoutProps {
  children: React.ReactNode; // This allows for any valid React node
}

export const metadata: Metadata = {
  title: "Resource Hub",
  description: "Resource sharing platform",
};

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
          {/* Render children directly without ThemeProvider */}
          {children}
        </body>
      </html>
    </>
  );
}

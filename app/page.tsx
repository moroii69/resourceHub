"use client";

import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react"; 
import { Skeleton } from "@/components/ui/skeleton"; 
import TypographyH1 from "@/components/TypographyH1";
import TypographyLead from "@/components/TypographyLead"; 
import ButtonDestructive from "@/components/ButtonDestructive"; 
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Main Home component
export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {isLoading ? (
        <>
          <Skeleton className="h-10 w-[300px] mb-4" />
          <Skeleton className="h-8 w-[200px] mb-6" />
          <div className="flex space-x-4 mt-4">
            <Skeleton className="h-10 w-[150px]" />
            <Skeleton className="h-10 w-[150px]" />
          </div>
        </>
      ) : (
        <>
          <TypographyH1 />
          <TypographyLead />
          <div className="flex space-x-4 mt-4">
            <ButtonDestructive
              label="SEMESTER 1"
              onClick={() => router.push("/semester1")} 
            />
            <ButtonDestructive
              label="SEMESTER 2"
              onClick={() => router.push("/semester2")} 
            />
          </div>
          <SpeedInsights /> {/* Add SpeedInsights component here */}
        </>
      )}
      <Analytics />
    </div>
  );
}

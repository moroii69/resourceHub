"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import BreadcrumbDemo from "./components/BreadcrumbDemo"; // Import BreadcrumbDemo
import TypographyLead from "./components/TypographyLead"; // Import TypographyLead
// import { Button } from "@/components/ui/button";

export default function Home() {
  return <MainContent />;
}

function MainContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center">
      <div className="absolute top-4 left-4">
        <BreadcrumbDemo />
      </div>
      {isLoading ? (
        <>
          <Skeleton className="h-10 w-[300px] mb-4" />
          <Skeleton className="h-8 w-[200px] mb-6" />
        </>
      ) : (
        <>
          <TypographyLead />
          <div className="flex space-x-4 mt-4">
            {/* Other content can be added here */}
          </div>
        </>
      )}
    </div>
  );
}

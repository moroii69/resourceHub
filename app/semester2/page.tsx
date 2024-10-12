"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import BreadcrumbDemo from "./components/BreadcrumbDemo"; // Import BreadcrumbDemo
import TypographyLead from "./components/TypographyLead"; // Import TypographyLead
import { Button } from "@/components/ui/button";

export default function Home() {
  return <MainContent />;
}

function MainContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
            <Button
              variant="destructive"
              onClick={() => router.push("/semester2/groupA")}
            >
              GROUP A
            </Button>
            <Button
              variant="destructive"
              onClick={() => router.push("/semester2/groupB")}
            >
              GROUP B
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

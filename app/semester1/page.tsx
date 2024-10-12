"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export function TypographyLead() {
  return (
    <p className="text-3xl text-muted-foreground uppercase mb-4">
      CHOOSE YOUR <strong>GROUP</strong>
    </p>
  );
}


export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/semester1">Semester 1</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default function Home() {
  return (
    <MainContent />
  );
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
                  onClick={() => router.push("/semester1/groupA")}
                >
                  GROUP A
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => router.push("/semester1/groupB")}
                >
                  GROUP B
                </Button>
              </div>
            </>
          )}
        </div>
      );
    }
    
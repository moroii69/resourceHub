"use client";

import * as React from "react"; // Import React
import { useRouter } from "next/navigation"; // Correct import for App Router
import { Moon, Sun } from "lucide-react"; // Icons for light/dark mode toggle
import { useTheme } from "next-themes"; // Theme context
import { Button } from "@/components/ui/button"; // Button component
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Dropdown menu components
import { useEffect, useState } from "react"; // For managing state and effects
import { Skeleton } from "@/components/ui/skeleton"; // Skeleton loading component

// Typography components
export function TypographyH1() {
  return (
    <h1 className="text-5xl tracking-tight" style={{ marginBottom: '2rem' }}>
      Welcome to ResourceHub
    </h1>
  );
}

export function TypographyLead() {
  return (
    <p className="text-3xl text-muted-foreground uppercase mb-4">
      CHOOSE YOUR <strong>SEMESTER</strong>
    </p>
  );
}

// Button component
export function ButtonDestructive({ label, onClick }) {
  return (
    <Button variant="destructive" onClick={onClick}>
      {label}
    </Button>
  );
}

// Main Home component
export default function Home() {
  return <MainContent />;
}

// Main content component
function MainContent() {
  const router = useRouter(); // Use the router from next/navigation
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
              onClick={() => router.push("/semester1")} // Navigate to semester 1
            />
            <ButtonDestructive
              label="SEMESTER 2"
              onClick={() => router.push("/semester2")} // Navigate to semester 2
            />
          </div>
        </>
      )}
    </div>
  );
}

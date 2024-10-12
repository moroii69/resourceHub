"use client";

import * as React from "react";
import { useEffect, useState } from "react"; 
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation"; 
import { Skeleton } from "@/components/ui/skeleton"; 
import { Moon, Sun } from "lucide-react"; 
import { useTheme } from "next-themes"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; 

export function TypographyH1() {
  return (
    <h1
      className="text-5xl tracking-tight" 
      style={{ marginBottom: '2rem' }} 
    >
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

export function ButtonDestructive({ label, onClick }) {
  return (
    <Button variant="destructive" onClick={onClick}>
      {label}
    </Button>
  );
}

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="absolute top-4 right-4">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Main Home component
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
    <div className="flex flex-col items-center justify-center min-h-screen p-4"> 
      <ModeToggle /> 
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
        </>
      )}
    </div>
  );
}
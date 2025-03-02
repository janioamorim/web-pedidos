"use client";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();


  useEffect(() => {
    console.log('------',user);
    
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/auth/login"); 
    }
  }, [user, router]);

  return null;
}
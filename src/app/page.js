"use client"
import Navbar from "@/components/Layout/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import Slides from "@/utils/Slides";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  
  return (
    <main className="relative">
      <div className="space-y-3">
      <Slides/>
      </div>
     
    </main>
  );
}

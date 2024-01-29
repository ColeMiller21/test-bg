"use client";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function Home() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    setIsSafari(iOS && webkit && !ua.match(/CriOS/i));
  }, []);

  const safariClass = isSafari ? "safari-ios-bg-fix" : "";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-primary">
      <h1 className="font-extrabold text-4xl">BG Test</h1>
      <div className={`relative w-full`}>
        <div className="absolute w-full h-full bg-primary opacity-20"></div>
        <video
          className={"w-full lg:w-1/2 h-full object-contain"}
          preload="auto"
          playsInline
          autoPlay
          muted
          loop
        >
          <source src="/video/Nature.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-primary">
      <h1 className="font-extrabold text-4xl">BG Test</h1>
      <div className="relative w-full m-auto">
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

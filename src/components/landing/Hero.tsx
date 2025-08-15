"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Aurora */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-aurora animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-aurora animation-delay-8000"></div>
      </div>

      {/* Floating Avatars */}
      <div className="absolute top-20 left-20 animate-float">
        <Image
          src="/hitesh.webp"
          alt="Hitesh Choudhary"
          width={100}
          height={100}
          className="rounded-full border-2 border-white/20 shadow-lg"
        />
      </div>
      <div className="absolute bottom-20 right-20 animate-float animation-delay-2000">
        <Image
          src="/piyush.webp"
          alt="Piyush Garg"
          width={100}
          height={100}
          className="rounded-full border-2 border-white/20 shadow-lg"
        />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 space-y-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg text-center">
        <h1 className="text-5xl font-bold text-white">
          Welcome to Persona AI Chat
        </h1>
        <p className="text-lg text-white/80">
          Engage in conversations with AI personas of your favorite creators.
        </p>
        <Link href="/chat">
          <button className="px-8 py-3 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:scale-105 transition-transform">
            Start Chatting
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

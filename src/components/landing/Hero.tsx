"use client";
import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "@/components/ui/TypewriterEffect";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Aurora */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-2xl animate-aurora"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-2xl animate-aurora animation-delay-4000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-2xl animate-aurora animation-delay-8000"></div>
      </div>
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Floating Avatars */}
      <div className="absolute top-20 left-20 animate-float hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        <Image
          src="/hitesh.webp"
          alt="Hitesh Choudhary"
          width={100}
          height={100}
          className="rounded-full border-2 border-white/20 shadow-lg"
        />
      </div>
      <div className="absolute bottom-20 right-20 animate-float animation-delay-2000 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
        <Image
          src="/piyush.webp"
          alt="Piyush Garg"
          width={100}
          height={100}
          className="rounded-full border-2 border-white/20 shadow-lg"
        />
      </div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 space-y-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg text-center animate-fade-in hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 ease-in-out">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text drop-shadow-xl">
          Welcome to Persona AI Chat
        </h1>
        <p className="text-xl text-white max-w-2xl drop-shadow-md">
          <TypewriterEffect text="Engage in dynamic conversations with AI personas of your favorite creators, powered by cutting-edge AI." speed={40} />
        </p>
        <Link href="/chat">
          <button className="px-10 py-4 font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-xl active:scale-95">
            Start Chatting
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

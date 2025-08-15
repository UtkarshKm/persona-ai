"use client";
import Image from "next/image";
import Link from "next/link";

interface PersonaCardProps {
  name: string;
  imageSrc: string;
  tagline: string;
  colorClass: string;
  href: string;
}

const PersonaCard = ({ name, imageSrc, tagline, colorClass, href }: PersonaCardProps) => {
  return (
    <div className="relative group transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${colorClass} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
      ></div>
      <div className="relative p-6 bg-black rounded-lg leading-none shadow-lg group-hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <Image
            src={imageSrc}
            alt={name}
            width={96}
            height={96}
            className="rounded-full border-2 border-transparent group-hover:border-white/50 transition-all duration-300 ease-in-out"
          />
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-gray-300">{tagline}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href={href}>
            <button className="px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105">
              Chat Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;

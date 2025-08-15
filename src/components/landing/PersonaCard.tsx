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
    <div className="relative group">
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${colorClass} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
      ></div>
      <div className="relative p-6 bg-black rounded-lg leading-none">
        <div className="flex items-center space-x-4">
          <Image
            src={imageSrc}
            alt={name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-gray-400">{tagline}</p>
          </div>
        </div>
        <div className="mt-4">
          <Link href={href}>
            <button className="px-4 py-2 text-sm font-bold text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              Chat Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;

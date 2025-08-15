"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export type Persona = "hitesh" | "piyush"

interface PersonaSwitchProps {
  persona: Persona
  onPersonaChange: (persona: Persona) => void
}

const personas = {
  hitesh: {
    name: "Hitesh Choudhary",
    image: "/hitesh.webp",
    shortName: "Hitesh",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  piyush: {
    name: "Piyush Garg",
    image: "/piyush.webp",
    shortName: "Piyush",
    color: "bg-green-500 hover:bg-green-600",
  },
}

export default function PersonaSwitch({ persona, onPersonaChange }: PersonaSwitchProps) {
  return (
    <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-700 rounded-xl shadow-inner">
      {Object.entries(personas).map(([key, personaData]) => (
        <Button
          key={key}
          variant={persona === key ? "default" : "ghost"}
          size="sm"
          onClick={() => onPersonaChange(key as Persona)}
          className={cn(
            "flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 transform-gpu relative overflow-hidden",
            persona === key
              ? cn("text-white shadow-lg ring-2 ring-white/20", personaData.color)
              : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white/50 dark:hover:bg-slate-600/50",
          )}
        >
          <Avatar
            className={cn(
              "h-6 w-6 transition-all duration-300",
              persona === key ? "ring-2 ring-white/30 shadow-md" : "hover:ring-2 hover:ring-slate-300/50",
            )}
          >
            <AvatarImage src={personaData.image || "/placeholder.svg"} alt={personaData.name} />
            <AvatarFallback className="text-xs">
              {personaData.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline transition-all duration-200">{personaData.shortName}</span>

          {persona === key && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          )}
        </Button>
      ))}
    </div>
  )
}

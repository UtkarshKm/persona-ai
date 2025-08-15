"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Loader2 } from "lucide-react"
import PersonaSwitch from "./PersonaSwitch"
import ThemeToggle from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"
import { Persona } from "@/lib/prompts"
import type { ModelMessage } from 'ai'

const personas = {
  hitesh: {
    name: "Hitesh Choudhary",
    image: "/hitesh.webp",
    theme: "blue",
    bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    accentColor: "bg-blue-500",
    messageColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  piyush: {
    name: "Piyush Garg",
    image: "/piyush.webp",
    theme: "green",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    accentColor: "bg-green-500",
    messageColor: "bg-green-100 dark:bg-green-900/30",
  },
}

export default function ChatWindow({ initialPersona }: { initialPersona: Persona }) {
  const [messages, setMessages] = useState<ModelMessage[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [persona, setPersona] = useState<Persona>(initialPersona)
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const currentPersona = personas[persona]

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Clear chat when persona changes
  const handlePersonaChange = (newPersona: Persona) => {
    setPersona(newPersona)
    setMessages([]) // Clear previous chat
    setInput('') // Clear input
  }

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage: ModelMessage = { role: "user", content: input }
    const newMessages = [...messages, userMessage]

    setMessages(newMessages)
    setInput("")
    setLoading(true)
    setTimeout(() => setIsTyping(true), 300)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          persona,
          messages: newMessages,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const { messages: botMessages }: { messages: ModelMessage[] } = await response.json()
      setTimeout(() => {
        setMessages((currentMessages) => [...currentMessages, ...botMessages])
        setIsTyping(false)
      }, 800)
    } catch (err) {
      console.error("Error sending message:", err)
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content: "Sorry, there was an error processing your message. Please try again.",
        },
      ])
      setIsTyping(false)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Helper function to render message content
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderContent = (content: string | any[]): string => {
    if (typeof content === 'string') {
      return content
    }
    if (Array.isArray(content)) {
      return content
        .filter(part => part.type === 'text')
        .map(part => part.text)
        .join('')
    }
    return ''
  }

  return (
    <div
      className={cn("min-h-screen bg-gradient-to-br transition-all duration-700 ease-out", currentPersona.bgGradient)}
    >
      <div className="container mx-auto max-w-5xl h-screen flex flex-col">
        {/* Header */}
        <Card className="m-4 p-4 shadow-lg border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-in slide-in-from-top-4 duration-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 ring-2 ring-white shadow-md transition-all duration-300 hover:ring-4 hover:shadow-lg">
                <AvatarImage src={currentPersona.image || "/placeholder.svg"} alt={currentPersona.name} />
                <AvatarFallback>
                  {currentPersona.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="animate-in slide-in-from-left-2 duration-500 delay-100">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Persona Chat</h1>
                <p className="text-base text-slate-600 dark:text-slate-400">Chatting with <span className="font-semibold">{currentPersona.name}</span></p>
              </div>
            </div>
            <div className="flex items-center gap-2 animate-in slide-in-from-right-2 duration-500 delay-200">
              <PersonaSwitch persona={persona} onPersonaChange={handlePersonaChange} />
              <ThemeToggle /> {/* Added ThemeToggle */}
            </div>
          </div>
        </Card>

        {/* Chat Messages */}
        <Card className="flex-1 mx-4 mb-4 p-4 shadow-lg border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden animate-in slide-in-from-bottom-4 duration-500 delay-100">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 pl-2 pt-4">
              {messages.length === 0 && (
                <div className="flex items-center justify-center h-full text-center animate-in fade-in duration-700 delay-300">
                  <div className="space-y-4">
                    <Avatar className="h-20 w-20 mx-auto ring-4 ring-white shadow-xl animate-pulse">
                      <AvatarImage src={currentPersona.image || "/placeholder.svg"} alt={currentPersona.name} />
                      <AvatarFallback className="text-xl">
                        {currentPersona.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="animate-in slide-in-from-bottom-2 duration-500 delay-500">
                      <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">
                        Start a conversation with {currentPersona.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Ask anything you&apos;d like to know!</p>
                    </div>
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-4 animate-in slide-in-from-bottom-2 duration-500 ease-out",
                    message.role === "user" ? "justify-end" : "justify-start",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 ring-2 ring-white shadow-sm transition-all duration-200 hover:ring-4 hover:shadow-md">
                      <AvatarImage src={currentPersona.image || "/placeholder.svg"} alt={currentPersona.name} />
                      <AvatarFallback className="text-xs">
                        {currentPersona.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl px-4 py-3 shadow-md transition-all duration-200 hover:shadow-lg transform-gpu", // Reduced max-w
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white dark:from-blue-700 dark:to-blue-800 hover:from-blue-700 hover:to-blue-800" // Gradient for user messages
                        : cn(currentPersona.messageColor, "hover:opacity-90 border border-transparent"), // Added border for assistant messages
                    )}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {renderContent(message.content)}
                    </p>
                  </div>

                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 ring-2 ring-white shadow-sm transition-all duration-200 hover:ring-4 hover:shadow-md">
                      <AvatarImage src="/diverse-user-avatars.png" alt="You" />
                      <AvatarFallback className="text-xs bg-slate-600 text-white">U</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {(loading || isTyping) && (
                <div className="flex gap-3 animate-in slide-in-from-bottom-2 duration-300">
                  <Avatar className="h-8 w-8 ring-2 ring-white shadow-sm">
                    <AvatarImage src={currentPersona.image || "/placeholder.svg"} alt={currentPersona.name} />
                    <AvatarFallback className="text-xs">
                      {currentPersona.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      "rounded-2xl px-4 py-3 shadow-sm flex items-center gap-3 animate-pulse",
                      currentPersona.messageColor,
                    )}
                  >
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {currentPersona.name} is thinking...
                    </span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>
          </div>
        </Card>

        {/* Input Area */}
        <Card className="m-4 p-4 shadow-lg border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-500 delay-200">
          <div className="flex gap-3">
            <Input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Message ${currentPersona.name}...`}
              disabled={loading}
              className={cn(
                "flex-1 border-slate-300 dark:border-slate-700 transition-all duration-200 focus:scale-[1.01] transform-gpu focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900", // Enhanced border and focus ring
                persona === "hitesh" 
                  ? "focus:ring-blue-500 focus:border-blue-500" 
                  : "focus:ring-green-500 focus:border-green-500"
              )}
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className={cn(
                "px-4 text-white shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 transform-gpu disabled:hover:scale-100",
                currentPersona.accentColor,
                persona === "hitesh"
                  ? "hover:bg-blue-600 focus:ring-blue-500"
                  : "hover:bg-green-600 focus:ring-green-500",
                "group" // Add group for icon animation
              )}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-active:translate-x-0" /> // Enhanced icon animation
              )}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
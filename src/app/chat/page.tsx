import ChatWindow from "@/components/ChatWindow"
import { Persona } from "@/lib/prompts";

export default function Home({ searchParams }: { searchParams: { persona: Persona } }) {
  const persona = searchParams.persona || 'hitesh';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ChatWindow initialPersona={persona} />
    </div>
  )
}


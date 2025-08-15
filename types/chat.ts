import type { ModelMessage } from "ai"
import type { Persona } from "../lib/prompts"

export interface ChatRequest {
  messages: ModelMessage[]
  persona: Persona
}

export interface ChatResponse {
  messages: ModelMessage[]
}

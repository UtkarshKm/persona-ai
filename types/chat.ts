import { Persona } from "../lib/prompts";

export interface ChatRequest {
  message: string;
  persona: Persona;
}

export interface ChatResponse {
  reply: string;
}

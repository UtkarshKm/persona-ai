export const PERSONA_PROMPTS = {
  hitesh: `You are Hitesh Choudhary...`,
  piyush: `You are Piyush Garg...`
} as const;

export type Persona = keyof typeof PERSONA_PROMPTS;

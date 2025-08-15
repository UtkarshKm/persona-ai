import { PERSONA_PROMPTS, type Persona } from '@/lib/prompts';
import { groq } from '@ai-sdk/groq';
import { generateText, ModelMessage } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages, persona }: { messages: ModelMessage[], persona: Persona } = await req.json();

    const { response } = await generateText({
      model: groq('openai/gpt-oss-120b'),
      system: PERSONA_PROMPTS[persona],
      messages,
    });

    // Return the messages directly as per AI SDK pattern
    return Response.json({ messages: response.messages });
    
  } catch (error) {
    console.error('API Error:', error);
    return Response.json(
      { error: 'Failed to generate response' }, 
      { status: 500 }
    );
  }
}
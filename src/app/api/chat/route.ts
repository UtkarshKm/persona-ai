import { PERSONA_PROMPTS, type Persona } from '@/lib/prompts';
import { groq } from '@ai-sdk/groq';
import { generateText, ModelMessage } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages, persona }: { messages: ModelMessage[], persona: Persona } = await req.json();

    // DEBUG: Log everything to see what's happening
    console.log('🔍 DEBUG - System Prompt Check:');
    console.log('1. Selected Persona:', persona);
    console.log('2. Available personas in PERSONA_PROMPTS:', Object.keys(PERSONA_PROMPTS));
    console.log('3. System prompt being used:', PERSONA_PROMPTS[persona]);
    console.log('4. System prompt length:', PERSONA_PROMPTS[persona]?.length || 'UNDEFINED');
    console.log('5. Messages sent:', JSON.stringify(messages, null, 2));
    console.log('6. Model being used: openai/gpt-oss-120b');

    // Check if system prompt exists
    if (!PERSONA_PROMPTS[persona]) {
      console.error('❌ System prompt not found for persona:', persona);
      throw new Error(`System prompt not found for persona: ${persona}`);
    }

    // Try with explicit system message in the messages array instead
    const systemMessage: ModelMessage = {
      role: 'system',
      content: PERSONA_PROMPTS[persona]
    };

    // Add system message at the beginning
    const messagesWithSystem = [systemMessage, ...messages];

    console.log('7. Final messages array with system:', JSON.stringify(messagesWithSystem, null, 2));

    const { response } = await generateText({
      model: groq('openai/gpt-oss-120b'),
      // Try both approaches - system parameter AND system message in array
      system: PERSONA_PROMPTS[persona],
      messages: messagesWithSystem,
    });

    console.log('8. Response received:', response.messages[0]);
    console.log('8.5. Response received:', response);
    console.log('9. Response content:', response.messages[0].content);

    // Return the messages directly as per AI SDK pattern
    return Response.json({ messages: response.messages });
    
  } catch (error) {
    console.error('❌ API Error:', error);
    console.error('❌ Error details:', JSON.stringify(error, null, 2));
    return Response.json(
      { error: 'Failed to generate response', details: error}, 
      { status: 500 }
    );
  }
}
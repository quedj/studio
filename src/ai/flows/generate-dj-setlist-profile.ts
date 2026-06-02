'use server';
/**
 * @fileOverview A Genkit flow for generating a customized DJ setlist energy profile.
 *
 * - generateDjSetlistProfile - A function that generates a setlist energy profile based on event details.
 * - GenerateDjSetlistProfileInput - The input type for the generateDjSetlistProfile function.
 * - GenerateDjSetlistProfileOutput - The return type for the generateDjSetlistProfile function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateDjSetlistProfileInputSchema = z.object({
  desiredVibe: z.string().describe('A description of the desired mood and atmosphere for the event.'),
  audienceDescription: z.string().describe('A description of the target audience for the event (e.g., age group, preferences, type of event).'),
});
export type GenerateDjSetlistProfileInput = z.infer<typeof GenerateDjSetlistProfileInputSchema>;

const GenerateDjSetlistProfileOutputSchema = z.object({
  setlistEnergyProfile: z.string().describe('A detailed description of the musical direction and energy profile for the DJ setlist.'),
});
export type GenerateDjSetlistProfileOutput = z.infer<typeof GenerateDjSetlistProfileOutputSchema>;

export async function generateDjSetlistProfile(input: GenerateDjSetlistProfileInput): Promise<GenerateDjSetlistProfileOutput> {
  return generateDjSetlistProfileFlow(input);
}

const generateDjSetlistProfilePrompt = ai.definePrompt({
  name: 'generateDjSetlistProfilePrompt',
  input: { schema: GenerateDjSetlistProfileInputSchema },
  output: { schema: GenerateDjSetlistProfileOutputSchema },
  prompt: `You are an expert DJ and setlist curator for 'QUE DJ EXPERIENCE'. Your task is to create a detailed setlist energy profile based on the client's event details.

Craft a musical direction that captures the essence of the event's desired vibe and perfectly suits the described audience. Think about genres, tempo changes, key musical moments, and overall flow.

Desired Vibe: {{{desiredVibe}}}
Audience Description: {{{audienceDescription}}}

Generate a 'setlistEnergyProfile' that would guide a DJ in creating an unforgettable experience.`,
});

const generateDjSetlistProfileFlow = ai.defineFlow(
  {
    name: 'generateDjSetlistProfileFlow',
    inputSchema: GenerateDjSetlistProfileInputSchema,
    outputSchema: GenerateDjSetlistProfileOutputSchema,
  },
  async (input) => {
    const { output } = await generateDjSetlistProfilePrompt(input);
    return output!;
  }
);

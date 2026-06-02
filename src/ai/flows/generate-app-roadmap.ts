'use server';
/**
 * @fileOverview A GenAI tool for clients to generate a preliminary project roadmap
 * for marketplace app development based on their business vision.
 *
 * - generateAppRoadmap - A function that handles the project roadmap generation process.
 * - GenerateAppRoadmapInput - The input type for the generateAppRoadmap function.
 * - GenerateAppRoadmapOutput - The return type for the generateAppRoadmap function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateAppRoadmapInputSchema = z.object({
  businessVision: z.string().describe("A detailed description of the client's business vision for a marketplace app."),
});
export type GenerateAppRoadmapInput = z.infer<typeof GenerateAppRoadmapInputSchema>;

const GenerateAppRoadmapOutputSchema = z.object({
  roadmapTitle: z.string().describe('A title for the generated project roadmap.'),
  developmentPhases: z.array(
    z.object({
      phaseName: z.string().describe('The name of the development phase (e.g., Discovery, Design, Development, Testing, Deployment).'),
      description: z.string().describe('A brief description of what will happen in this phase.'),
      estimatedTimeline: z.string().describe('An estimated duration for this phase (e.g., 2-4 weeks, 1 month).'),
      keyTechnologies: z.array(z.string()).describe('A list of key technologies or tools relevant to this phase.'),
    })
  ).describe('A list of development phases with details for each.'),
  overallSummary: z.string().describe('A high-level summary of the entire project roadmap.'),
  recommendedNextSteps: z.array(z.string()).describe('A list of recommended next steps for the client.'),
});
export type GenerateAppRoadmapOutput = z.infer<typeof GenerateAppRoadmapOutputSchema>;

export async function generateAppRoadmap(input: GenerateAppRoadmapInput): Promise<GenerateAppRoadmapOutput> {
  return generateAppRoadmapFlow(input);
}

const generateAppRoadmapPrompt = ai.definePrompt({
  name: 'generateAppRoadmapPrompt',
  input: { schema: GenerateAppRoadmapInputSchema },
  output: { schema: GenerateAppRoadmapOutputSchema },
  prompt: `You are an expert Tech Architect specializing in marketplace app development. Your goal is to help a client understand the potential development phases and technologies involved in building their vision.

Generate a preliminary project roadmap based on the client's business vision, including distinct development phases, key technologies, and estimated timelines.

Client's Business Vision:
{{{businessVision}}}

Provide the output in the specified JSON format, ensuring all fields are populated.
`,
});

const generateAppRoadmapFlow = ai.defineFlow(
  {
    name: 'generateAppRoadmapFlow',
    inputSchema: GenerateAppRoadmapInputSchema,
    outputSchema: GenerateAppRoadmapOutputSchema,
  },
  async (input) => {
    const { output } = await generateAppRoadmapPrompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview An AI agent that identifies and highlights the most in-demand skills in the Kenyan tech job market.
 *
 * - getInDemandSkills - A function that retrieves and formats the most in-demand skills.
 * - GetInDemandSkillsOutput - The return type for the getInDemandSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetInDemandSkillsOutputSchema = z.object({
  skills: z.array(z.string()).describe('An array of the most in-demand skills in the Kenyan tech job market.'),
});
export type GetInDemandSkillsOutput = z.infer<typeof GetInDemandSkillsOutputSchema>;

export async function getInDemandSkills(): Promise<GetInDemandSkillsOutput> {
  return getInDemandSkillsFlow();
}

const prompt = ai.definePrompt({
  name: 'getInDemandSkillsPrompt',
  output: {schema: GetInDemandSkillsOutputSchema},
  prompt: `You are an expert career counselor with extensive knowledge of the Kenyan tech job market.
  Identify the top 10 most in-demand technical skills for software developers in Kenya, based on current job postings and industry trends.
  Present the skills as a simple array of strings.
  Skills:`,
});

const getInDemandSkillsFlow = ai.defineFlow(
  {
    name: 'getInDemandSkillsFlow',
    outputSchema: GetInDemandSkillsOutputSchema,
  },
  async () => {
    const {output} = await prompt({});
    return output!;
  }
);

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Initialize Genkit with the Google AI plugin.
// The plugin will look for GEMINI_API_KEY or GOOGLE_API_KEY in your environment variables.
// If you are seeing 'FAILED_PRECONDITION', please ensure the API key is set in your project settings.
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});

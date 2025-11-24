import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCampaignStrategy = async (
  brandName: string,
  targetAudience: string,
  campaignGoal: string
): Promise<string> => {
  try {
    const prompt = `
      You are a world-class influencer marketing strategist.
      Create a concise, high-impact campaign strategy for a brand named "${brandName}".
      Target Audience: ${targetAudience}.
      Campaign Goal: ${campaignGoal}.
      
      Provide a response in Markdown format. 
      Include:
      1. A catchy Campaign Title.
      2. The Strategy Concept (2-3 sentences).
      3. Ideal Influencer Personas (bullet points).
      4. 3 Creative Content Ideas.
      5. 5 Trending Hashtags.
      
      Keep the tone professional, energetic, and modern.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Unable to generate strategy at this time.";
  } catch (error) {
    console.error("Error generating campaign strategy:", error);
    return "An error occurred while communicating with the AI. Please try again later.";
  }
};

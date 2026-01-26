
import { GoogleGenAI, Type } from "@google/genai";
import { WritingPrompt } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateWritingPrompt = async (genre: string): Promise<WritingPrompt> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a creative writing prompt for the genre: ${genre}. Make it atmospheric and inspiring.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            genre: { type: Type.STRING },
            prompt: { type: Type.STRING },
            context: { type: Type.STRING, description: "A bit of background or setting for the prompt" }
          },
          required: ["genre", "prompt", "context"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Error generating prompt:", error);
    return {
      genre: genre,
      prompt: "The silence in the library was broken not by a sound, but by a smell: fresh sea salt and old parchment.",
      context: "A mysterious library that appears only at midnight."
    };
  }
};

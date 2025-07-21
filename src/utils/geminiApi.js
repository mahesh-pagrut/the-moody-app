import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ This model is available only in v1
const API_KEY = "AIzaSyDOZCx01RNx3iNTH4oyjwS4_sgCWe40DS0";
const genAI = new GoogleGenerativeAI(API_KEY);

export const getGeminiResponse = async (prompt) => {
  try {
    // ✅ Use a valid model name
   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const result = await model.generateContent(prompt);
    const response = await result.response.text();

    return response || "No response.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Gemini API Error: Could not get a response.";
  }
};

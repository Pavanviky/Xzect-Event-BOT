import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCBrizO4dlarO67tYNNyRovEz0TOHajZk0";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  system_instruction: `
    You are an event planner. You assist with event planning and organizing. Your responses should only address event-related queries, such as scheduling, venues, and logistics. If the prompt is not about event planning, respond with: "Sorry, I can only help with event planning and organizing. Please ask a question related to events."
  `,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function classifyPrompt(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(`Is this prompt related to event planning: "${prompt}"? Respond with "yes" or "no".`);
  return result.response.text().toLowerCase().includes("yes");
}

export async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default { classifyPrompt, run };

import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to prevent immediate crashes in environments without keys set up yet
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getCleaningAdvice = async (query: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key configuration missing.");
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Você é um especialista em limpeza doméstica profissional da empresa 'Darei Prestação de Serviços'.
      O usuário está pedindo ajuda sobre: "${query}".
      
      Forneça um guia passo a passo curto, seguro e prático (máximo 4 passos) sobre como limpar ou resolver esse problema.
      Use um tom amigável, profissional e encorajador.
      Formate a resposta em Markdown simples.
      Se a pergunta não for sobre limpeza, responda educadamente que você só pode ajudar com dicas de limpeza.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Desculpe, não consegui gerar uma dica agora. Tente novamente mais tarde.";
  } catch (error) {
    console.error("Error fetching cleaning advice:", error);
    throw new Error("Falha ao consultar o especialista virtual.");
  }
};
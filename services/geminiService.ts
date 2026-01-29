
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const summarizePost = async (content: string): Promise<string> => {
  const ai = getAIClient();
  const prompt = `
    以下のブログ記事の内容を読み取り、読者が興味を引くような3行程度の要約を作成してください。
    言語は日本語でお願いします。
    
    内容:
    ${content}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "要約の生成に失敗しました。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AIサービスに接続できませんでした。";
  }
};

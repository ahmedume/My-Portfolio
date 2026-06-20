import { Request, Response } from "express";

const SYSTEM_INSTRUCTION = `You are a premium, professional AI recruitment assistant representing Ahmed Umer, a skilled AI and Web Developer. Your goal is to help recruiters learn about Ahmed's portfolio, professional achievements, skills, and background.

 Ahmed Umer Profile Context:
- Technical Skills:
  * AI & Machine Learning: LangChain AI Agents, Scikit-Learn, NumPy, Pandas, Google Gemini, OpenAI, Claude by Anthropic, Context Engineering
  * Web Development: React, Next.js, TypeScript, Python, FastAPI, Node.js
  * Tools & Platforms: N8N, GitHub, Git, Devpost, Google AI Studio, Draw.io, Google Vertex AI, Affinity (Canva)
- Selected Projects:
  * Medical Research Assistant (2026, Final year project): A multi-agent health system using LangGraph React Agents with live PubMed and FDA database integration for evidence-based medical queries.
  * MedLens (2026): Medical research platform that retrieves PubMed studies and generates structured evidence-based article trust breakdowns.
  * Virtual Try On (2026): Browser-first virtual try-on demo for trying clothes before buying.
  * Voice Intelligence (2026): Web App for converting speech to text and text to speech.
- Hackathons:
  * Agent Development Kit Hackathon with Google Cloud (2025): Competed among 10,364 global participants for a $50,000 prize pool. Submitted a multi-agent AI system using Google's Agent Development Kit. Earned Devpost badges: First Online Hackathon, Generalist, X Hackathons Level 1.
- Certifications:
  * Cyber Security Essentials — Cisco Networking Academy (2024)
  * Fundamentals of Digital Marketing — Google Digital Garage (2022)
  * Introduction to Model Context Protocol — Anthropic (2026)
  * Introduction to LangChain — LangChain Academy (2026)
  * n8n Course Level 1 — n8n (2025)
  * ICASE-2025 (STEAM Education Conference) — Participant — The University of Faisalabad (2025)
  * Innovative Pakistan — Participant — The University of Faisalabad (2026)
- Education:
  * BS Artificial Intelligence (Graduated, 2022 – 2026) — The University of Faisalabad, Faisalabad, Pakistan
  * Intermediate in Computer Science (Graduated, 2020 – 2022) — Concordia College, Faisalabad, Pakistan
  * Matric (Graduated, 2018 – 2020) — Kohinoor Grammar School, Faisalabad, Pakistan
- Experience:
  * C-Soft (Career Institute) — Web Developer (Intern) [July 2024 – Sep 2024]
    * Developed responsive frontend pages using React, Javascript, HTML, CSS.
    * Improved load times and responsive design.

CRITICAL PRIVACY & SECURITY RULES (NON-NEGOTIABLE):
1. **PHONE NUMBER PRIVACY**: You MUST NOT expose or show Ahmed's phone number under any conditions. If someone asks for Ahmed's phone number or how to call him, reply exactly: "I am not permitted to share Ahmed's phone number for privacy reasons. Please reach out to him via email at ahmedumeranwer@gmail.com."
2. **ADDRESS PRIVACY**: You MUST NOT expose any specific home address. If asked for his location, you may say he resides generally in "Faisalabad, Pakistan", but do not provide specific streets, blocks, or location coordinates. If someone asks for his specific address, reply exactly: " Ahmed's specific home address is private. Please feel free to schedule a virtual meeting or contact him at ahmedumeranwer@gmail.com!"
3. **EMAIL SHARING**: For any contact inquiries (e.g. email, message, get in touch, contact info), provide the email: ahmedumeranwer@gmail.com. Do not give out any other contact credentials.
4. **ROLE**: Keep your tone elegant, highly professional, responsive, and factual. Do not make up any certifications or projects. Keep explanations clean and concise.`;

export async function chatHandler(req: Request, res: Response): Promise<void> {
  try {
    const { message, history } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    const groqKey = process.env.GROQ_API_KEY;

    // Check if key is empty, or is the placeholder value
    if (
      !groqKey ||
      groqKey.trim() === "" ||
      groqKey === "gsk_your_actual_groq_api_key_here" ||
      groqKey === "MY_GROQ_API_KEY_PLACEHOLDER"
    ) {
      console.log("Groq API key is missing or not configured. Instructing user...");
      res.json({
        text: "I am ready to chat, but your Groq API Key is not configured yet! Please paste your actual `GROQ_API_KEY` into the `.env` file at the root of the project to enable the AI chatbot. I am looking forward to answering your questions!",
        engine: "none"
      });
      return;
    }

    console.log("Using Groq API for chatbot...");
    const groqHistory = (history || []).map((h: any) => ({
      role: h.role === "model" || h.role === "assistant" ? "assistant" : "user",
      content: h.text || h.content || ""
    }));

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqKey.trim()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_INSTRUCTION },
          ...groqHistory,
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errData = await response.text();
      console.error("Groq response failed:", errData);
      throw new Error(`Groq API returned status ${response.status}: ${errData}`);
    }

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;
    
    if (text) {
      res.json({ text, engine: "groq" });
      return;
    } else {
      throw new Error("Empty response content from Groq API.");
    }

  } catch (error: any) {
    console.error("Chat Server Error:", error);
    res.status(500).json({
      error: "Internal Server Error in Groq Chat Agent",
      message: error?.message || "An unexpected error occurred."
    });
  }
}

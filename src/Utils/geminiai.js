import { GoogleGenAI } from "@google/genai";
import { GEMINI_API } from "./constant";

const geminiai = new GoogleGenAI({ apiKey: GEMINI_API });

export default geminiai;
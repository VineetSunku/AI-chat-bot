// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";import { GoogleGenAI } from "@google/genai";
import { products, orders, storePolicies } from "./sampleData.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Gemini API Integration ---
// Initialize the Google Generative AI client using your API key.
const genAI = new GoogleGenAI({apiKey:process.env.GOOGLE_CLOUD_API_KEY});
let initialprompt=process.env.Prompt
// Chat endpoint using Gemini API (gemini-pro) without authentication
app.post("/api/chat", async (req, res) => {
  const { query } = req.body;
  initialprompt+=query;
  console.log("got the request"+query)
  try {
    // Get the Gemini model instance (using "gemini-pro")
    const response = await genAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: initialprompt,
    });
    // console.log(response);
    res.json({ response: response.text });
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Failed to fetch AI response." });
  }
});

// --- Sample Data Endpoints (publicly accessible) ---
app.get("/api/inventory", (req, res) => {
  res.json(products);
});

app.get("/api/order/:orderId", (req, res) => {
  const order = orders.find(o => o.id === req.params.orderId);
  if (order) res.json(order);
  else res.status(404).json({ error: "Order not found" });
});

app.get("/api/policies", (req, res) => {
  res.json(storePolicies);
});

app.post("/api/refund", (req, res) => {
  const order = orders.find(o => o.id === req.body.orderId);
  if (order) {
    order.status = "Refund Processed";
    order.refund = true;
    res.json({ message: "Refund processed", order });
  } else {
    res.status(404).json({ error: "Order not found" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

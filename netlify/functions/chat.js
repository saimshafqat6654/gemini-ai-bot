const { GoogleGenAI } = require("@google/genai");

exports.handler = async (event, context) => {
  // Always permit safe pre-flight options routing
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ status: "OK" }),
    };
  }

  try {
    const { message } = JSON.parse(event.body);
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "System Error: Missing GEMINI_API_KEY configuration." }),
      };
    }

    // Initialize the modern client
    const ai = new GoogleGenAI({ apiKey });
    
    // Correct method structure for the modern @google/genai SDK
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: message,
    });

    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
      body: JSON.stringify({ reply: response.text }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: error.message }),
    };
  }
};

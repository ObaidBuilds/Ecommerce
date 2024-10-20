import React, { useEffect, useState } from "react";
import getResultFromGemini from "../ai-model-gemini";
import Nav from "../components/Nav";
import ReactMarkdown from "react-markdown";

const Interest = () => {
  const [aiPrediction, setAiPrediction] = useState("Nothing detected yet..");
  const [loading, setLoading] = useState(true);

  const getPrediction = async () => {
    const product = JSON.parse(localStorage.getItem("products"));
    if (product) {
      const productDataString = Object.keys(product)
        .map((key) => `${key}: ${product[key]}`)
        .join(", ");

        const prompt = `Based on the provided product data, analyze the customer's preferences between men's and women's perfumes. Additionally, infer the person's personality traits, lifestyle choices, and preferences based on the nature of the selected products. Provide insights into their potential likes, dislikes, and any patterns or trends you observe in the data, followed by detailed remarks on their overall fragrance preferences: ${productDataString}`;


      const prediction = await getResultFromGemini(prompt);
      setAiPrediction(prediction);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPrediction();
  }, []);

  return (
    <>
      <Nav />
      <div className="flex flex-col items-center mt-[100px] min-h-[80vh] max-h-auto px-4 mt-[100px]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Your Interest Prediction
        </h2>

        {loading ? (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            ></div>
            <p className="ml-3 text-lg">
              Analyzing your interest...
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-[90%] w-full">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Based on your recent activity:
            </h3>

            {/* Display AI Prediction */}
            <div className="p-4 rounded-md">
              <h4 className="text-lg font-medium text-blue-800">
                AI Prediction:
              </h4>
              <ReactMarkdown>{aiPrediction}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Interest;

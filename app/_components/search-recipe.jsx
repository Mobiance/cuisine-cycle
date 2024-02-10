// components/SearchRecipes.js

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";

const SearchRecipes = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://tasty.p.rapidapi.com/recipes/list",
        {
          params: { q: text },
          headers: {
            "x-rapidapi-key": process.env.NEXT_PUBLIC_PROJECT_API_KEY,
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        }
      );
      setResponse(response.data.results);
    } catch (error) {
      setError("Error fetching data. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96">
        <Textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter your Ingredients here"
          rows={5}
          cols={50}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </Button>
      </form>
      {error && <div>{error}</div>}
      {response && (
        <div>
          <h2>Recipe Results:</h2>
          <ul>
            {response.map((recipe, index) => (
              <li key={index}><li key={recipe.name}>{recipe.name}: {recipe.description} <li key={recipe.instructions.index}>{recipe.instructions.display_text}</li></li></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchRecipes;

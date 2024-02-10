// components/SearchRecipes.js

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
            "x-rapidapi-key": process.env.PROJECT_API_KEY,
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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here"
          rows={5}
          cols={50}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
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

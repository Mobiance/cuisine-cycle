import React, { useState } from "react";
import axios from "axios"; // Assuming you're using Axios for HTTP requests

export const RecipeForm = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "https://tasty.p.rapidapi.com/recipes/list",
        { q: text },
        {
          headers: {
            "x-rapidapi-key": "c98f9e4f38msh5c310f071f56d15p135298jsn058b87e87576",
            "x-rapidapi-host": "tasty.p.rapidapi.com",
          },
        }
      );
      setResponse(response.data);
    } catch (error) {
      console.error("Error:", error);
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
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Recipe Results:</h2>
          <ul>
            {response.map((recipe, index) => (
              <li key={index}>{recipe.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

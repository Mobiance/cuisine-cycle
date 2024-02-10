// components/SearchRecipes.js

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import axios from "axios";
import { CardRecipe } from "./card-recipe";
import { Spinner } from "@/components/spinner";

const SearchRecipes = () => {
    const [text, setText] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponse(null);
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
        <div className="flex flex-col w-full items-center justify-center py-6">
            <form onSubmit={handleSubmit} className="w-96">
                <Textarea
                    value={text}
                    onChange={handleChange}
                    placeholder="Enter your Ingredients here"
                    rows={5}
                    cols={400}
                    className="p-4 bg-[#fad09d] shadow-md border-none"
                />
                <Button type="submit" disabled={loading} className="p-6">
                    {loading ? "" : "Submit"}
                </Button>
            </form>
            {error && <div>{error}</div>}
            {loading && (<Spinner/>)}
            {response  && (
                <div className="w-9/12">
                    <p className="text-lg font-bold p-6">Recipe Results:</p>
                    <ul>
                        {response.map((recipe, recipeIndex) => (
                            <CardRecipe recipe={recipe} recipeIndex={recipeIndex}/>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchRecipes;

"use client"

import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { remark } from 'remark';
import html from 'remark-html';


export const AiPrompt = () => {
    const [loading, setLoading] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [region, setRegion] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const [hobbies, setHobbies] = useState("");
    let contentHtml = null;
    const genAI = new GoogleGenerativeAI(
        process.env.NEXT_PUBLIC_GEMINI_KEY
    );
    const fetchData = async () => {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Generate a ${region} recipe which contains the ingredients ${ingredients}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setApiData(text);
        console.log(text);
        const processedContent = await remark()
            .use(html)
            .process(text);
        contentHtml = processedContent.toString();
        console.log(contentHtml);
        setLoading(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(name, gender, age, country, hobbies);
        fetchData();
    };
    return (
        <div className="container">
            <Card className="mt-5 mb-5">
                <CardHeader>
                    <CardTitle>Search Recipes </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="row d-flex align-items-end">
                            <div className="col-lg-2">
                                <label htmlFor="name" className="form-label">
                                    Ingredients
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={ingredients}
                                    onChange={(e) => setIngredients(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-2 p-3">
                                <label htmlFor="gender" className="form-label">
                                    Region
                                </label>
                                <select
                                    className="form-select"
                                    id="gender"
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                >
                                    <option value="">Select Region</option>
                                    <option value="North Indian">North Indian</option>
                                    <option value="South Indian">South Indian</option>
                                </select>
                            </div>
                            <div className="col-lg-2">
                                <button type="submit" className="btn btn-primary mt-3 col-lg-12">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
            <div className="">
                {!loading && <p className="text-align-left">{apiData}</p>}
                {loading && <p>Loading...</p>}
            </div>
            <div>
                {
                    contentHtml
                }
            </div>
        </div>
    );
}

"use client"
import Navbar from "../_components/Navbar";

const { AiPrompt } = require("../_components/aiPrompt")

const AiPage = () => {
    return(
        <main className="overflow-hidden">
            <Navbar />
            <div className="h-[100%] w-full flex items-center justify-center">
                <AiPrompt />
            </div>
        </main>
    )
}
export default AiPage;

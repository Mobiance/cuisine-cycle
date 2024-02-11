"use client"
import Link from "next/link";
import Navbar from "../_components/Navbar";
import { Button } from "@/components/ui/button";

const { AiPrompt } = require("../_components/aiPrompt")

const AiPage = () => {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <div className="h-[100%] w-full flex items-center justify-center">
                <AiPrompt />
                <Button>
                    <Link href="/">Search Recipe</Link>
                </Button>
            </div>
        </main>
    )
}
export default AiPage;

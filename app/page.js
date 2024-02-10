"use client"
import Navbar from "./_components/Navbar";
import { MainBody } from "./_components/main-body";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <div className="h-full flex items-center justify-center">
                <MainBody />
            </div>
        </main>
    );
}

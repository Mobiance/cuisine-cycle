<<<<<<< HEAD
"use client"
import Image from "next/image";
import  Navbar  from "./_components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
    </main>
  );
=======
import { MainBody } from "./_component/main-body";

export default function Home() {
    return (
        <div className="h-full w-full">
            <MainBody />
        </div>
    );
>>>>>>> 3f19372580be691de1dadd6c0f3e8fe9a70155d7
}

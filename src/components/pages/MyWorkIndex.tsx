"use client";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PublicSpeaking from "../layout/MyWork/PublicSpeaking";
export default function MyWorkIndex() {
  return (
    <div className="flex flex-col bg-[#F3FCF0] min-h-screen w-full">
      <Header />
      <PublicSpeaking />
      <Footer />
    </div>
  );
}

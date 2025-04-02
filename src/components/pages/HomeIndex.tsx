"use client";
import Header from "../layout/Header";
import Banner from "../layout/Homepage/Banner";
import AboutMentor from "../layout/Homepage/AboutMentor";

export default function HomeIndex() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Banner />
      <AboutMentor />
    </div>
  );
}

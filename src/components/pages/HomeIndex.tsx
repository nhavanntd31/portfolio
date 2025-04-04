"use client";
import Header from "../layout/Header";
import Banner from "../layout/Homepage/Banner";
import AboutMentor from "../layout/Homepage/AboutMentor";
import BlogList from "../layout/Homepage/BlogList";
import ContactForm from "../layout/Homepage/ContactForm";
import Footer from "../layout/Footer";
export default function HomeIndex() {
  return (
    <div className="flex flex-col bg-[#F3FCF0] min-h-screen w-full">
      <Header />
      <Banner />
      <AboutMentor />
      <BlogList />
      <ContactForm hasBackground={true} />
      <Footer />
    </div>
  );
}

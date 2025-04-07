"use client";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import AdminPage from "../layout/Admin/AdminPage";
export default function HomeIndex() {
  return (
    <div className="flex flex-col bg-[#F3FCF0] min-h-screen w-full">
      <Header />
      <AdminPage />
      <Footer />
    </div>
  );
}

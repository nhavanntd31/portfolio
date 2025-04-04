import Image from "next/image";
import { Urbanist } from "next/font/google";
import Blog from "@/public/assets/images/blog.png";
import { Button } from "@/components/ui/button";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface BlogCardProps {
  image: any;
  category: string;
  author: string;
  date: string;
  title: string;
}

const BlogCard = ({ image, category, author, date, title }: BlogCardProps) => (
  <div className="group cursor-pointer">
    <div className="relative h-[250px] shadow-2xl rounded-3xl overflow-hidden mb-4">
      <Image
        src={image}
        alt={category}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] px-4 py-1 rounded-full">
        <span className="text-sm text-black">{category}</span>
      </div>
    </div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-[#344054]">{author}</span>
      <span className="text-sm text-[#344054]">{date}</span>
    </div>
    <h3 className="text-xl font-medium mb-2 text-[#344054] group-hover:text-[#FD853A] transition-colors duration-300">
      {title}
    </h3>
  </div>
);

export default function BlogList() {
  const blogs = [
    {
      image: Blog,
      category: "UI/UX Design",
      author: "Doris Do",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic"
    },
    {
      image: Blog,
      category: "App Design", 
      author: "Doris Do",
      date: "08 Oct, 2023",
      title: "Sugeo: Loan Management System for Rural Sector"
    },
    {
      image: Blog,
      category: "App Design",
      author: "Doris Do", 
      date: "08 Oct, 2023",
      title: "Sugeo: Loan Management System for Rural Sector"
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-semibold" style={{ fontFamily: urbanist.style.fontFamily }}>
          <span className="text-[#344054]">Blog</span>
        </h2>
        <Button className="bg-[#FD853A] hover:bg-[#FF9B5C] text-white px-6 py-6 rounded-full font-medium hover:scale-105 hover:shadow-lg">
          See All
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}

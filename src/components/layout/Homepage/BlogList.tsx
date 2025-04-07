import Image from "next/image";
import { Urbanist } from "next/font/google";
import Blog from "@/public/assets/images/blog.png";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export interface BlogCardProps {
  id: string;
  image: any;
  category: string;
  author: string;
  date: string;
  title: string;
}

export const BlogCard = ({ id, image, category, author, date, title }: BlogCardProps) => (
  <div className="group cursor-pointer">
    <Link href={`/blog/${id}`}>
      <div className="relative h-[250px] shadow-2xl rounded-3xl overflow-hidden mb-4">
        <img
          src={image}
          alt={category}
          className="transition-transform w-full h-full object-cover duration-300 group-hover:scale-110"
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
    </Link>
  </div>
);

export default function BlogList() {
  const [blogs, setBlogs] = useState<BlogCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/blog?type=blog&limit=3');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          const formattedPosts = result.data.map((post: any) => ({
            id: post.id,
            image: post.imageUrl || Blog,
            category: post.category || "Blog",
            author: post.author || "Doris Do",
            date: new Date(post.date).toLocaleDateString('en-US', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            }),
            title: post.title || "Blog Post"
          }));
          setBlogs(formattedPosts);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
       
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-semibold" style={{ fontFamily: urbanist.style.fontFamily }}>
          <span className="text-[#344054]">Blog</span>
        </h2>
        <Link href="/blog" className="bg-[#FD853A] hover:bg-[#FF9B5C] text-white px-6 py-4 rounded-full font-medium hover:scale-105 hover:shadow-lg">
          See All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {isLoading ? (
          <div className="col-span-3 flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FD853A]"></div>
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">No blog posts found</h3>
            <p className="text-gray-600">Check back later for new content.</p>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CalendarDays, User } from "lucide-react";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface BlogPost {
  _id: string;
  title: string;
  category: string;
  author: string;
  type: string;
  imageUrl: string;
  content: string;
  date: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/blog/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog details');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          setBlog({
            ...result.data,
            date: new Date(result.data.date).toLocaleDateString('en-US', { 
              day: '2-digit', 
              month: 'long', 
              year: 'numeric' 
            })
          });
        } else {
          setError('Blog not found');
        }
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setError('Failed to load blog details');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchBlogDetail();
    }
  }, [params.id]);

  return (
    <div className={`${urbanist.className} flex flex-col pt-26 min-h-screen bg-[#F3FCF0]`}>
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#329A1F]"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">{error}</h2>
            <p className="text-gray-600">Please try again later or go back to the blog list.</p>
          </div>
        ) : blog ? (
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-[#344054] mb-6">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={18} />
                <span>{blog.date}</span>
              </div>
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#F3FCF0] text-[#329A1F] border border-[#E6F4E1] shadow-sm hover:shadow-md transition-all duration-300">
                {blog.category}
              </span>
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-[#329A1F] text-[#F3FCF0] border border-[#E6F4E1] shadow-sm hover:shadow-md transition-all duration-300">
                {blog.type.toUpperCase()}
              </span>
            </div>
            
            <div className="relative w-full h-[400px] md:h-[500px] mb-8 rounded-2xl overflow-hidden">
              <img 
                src={blog.imageUrl} 
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Blog not found</h2>
            <p className="text-gray-600">The blog post you're looking for doesn't exist or has been removed.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

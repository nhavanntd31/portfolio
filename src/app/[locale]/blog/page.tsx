"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import BlogBanner from "@/public/assets/images/flag.png";
import Link from "next/link";

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
  date: string;
  imageUrl: string;
  type: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/blog?type=blog');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          const formattedPosts = result.data.map((post: any) => ({
            _id: post._id,
            title: post.title,
            category: post.category,
            author: post.author,
            type: post.type,
            imageUrl: post.imageUrl,
            date: new Date(post.date).toLocaleDateString('en-US', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            })
          }));
          setBlogPosts(formattedPosts);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blogs');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className={`${urbanist.className} flex flex-col min-h-screen bg-[#F3FCF0]`}>
      <Header />
      
      <main className="flex-grow pt-32">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-12">
     
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="relative w-full md:w-1/2 h-[600px] rounded-2xl overflow-hidden">
              <img 
                src={BlogBanner.src}
                alt="Blog Banner"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <h2 className="text-white text-3xl font-bold mb-2">Latest Articles & News</h2>
                <p className="text-white/80">Discover my thoughts on sustainability, education, and creativity</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center">
              <div>
                <h2 className="text-4xl font-semibold mb-6" style={{ fontFamily: urbanist.style.fontFamily }}>
                  <span className="text-[#344054]">Blog</span>
                </h2>
                <p className="text-[#344054]">Welcome to my blog – a space where I share the <span className="text-[#329A1F] font-semibold">stories</span>, <span className="text-[#FD853A] font-semibold">lessons</span>, and <span className="text-[#4CB5F0] font-semibold">moments</span> that have shaped my journey as a changemaker.</p>
                <p className="text-[#344054] mt-4">Here, you'll find reflections on <span className="text-[#329A1F] font-semibold">sustainability</span>, <span className="text-[#329A1F] font-semibold">circular economy</span>, <span className="text-[#4CB5F0] font-semibold">creative storytelling</span>, and <span className="text-[#FD853A] font-semibold">youth empowerment</span>. From launching <span className="text-[#329A1F] font-semibold">UPGREEN VIETNAM</span> to mentoring students through <span className="text-[#329A1F] font-semibold">APPYSIS</span>, I write about the real work behind building impact-driven projects.</p>
                <p className="text-[#344054] mt-4">Whether it's behind-the-scenes from public speaking, insights on working with communities, or tips for young people applying for scholarships – this space is all about <span className="text-[#329A1F] font-semibold">learning</span>, <span className="text-[#4CB5F0] font-semibold">growing</span>, and <span className="text-[#FD853A] font-semibold">creating change</span> together.</p>
                <p className="text-[#344054] mt-4">Because I believe stories don't just inspire – they <span className="text-[#FD853A] font-semibold">ignite action</span>. And that's where change begins.</p>
              </div>
            </div>
          </div>
          Post
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#329A1F]"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-red-500 mb-4">{error}</h2>
              <p className="text-gray-600">Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 gap-8">
              {blogPosts.map((post) => (
                <Link href={`/blog/${post._id}`} key={post._id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-[250px]">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] px-4 py-1 rounded-full">
                        <span className="text-sm text-black">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#344054]">{post.author}</span>
                        <span className="text-sm text-[#344054]">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2 text-[#344054] group-hover:text-[#FD853A] transition-colors duration-300">
                        {post.title}
                      </h3>
                      <Button className="mt-4 bg-[#329A1F] hover:bg-[#40c026] text-white rounded-full">
                        Read More
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {!isLoading && !error && blogPosts.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">No blog posts found</h2>
              <p className="text-gray-600">Check back later for new content.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

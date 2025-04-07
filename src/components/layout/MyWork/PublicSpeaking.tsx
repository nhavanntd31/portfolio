import Image from "next/image";
import { ArrowRight, ArrowUpRight, Contact } from "lucide-react";
import BackgroundImage from "@/public/assets/images/Back2.png";
import { Urbanist } from "next/font/google";
import Frame2 from "@/public/assets/images/italia.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Blog from "@/public/assets/images/blog.png";
import { BlogCard } from "../Homepage/BlogList";
import ContactForm from "../Homepage/ContactForm";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import GlobalBack from "@/public/assets/images/global2.png"
import UpgreenBack from "@/public/assets/images/upgreen.png"
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface BlogPost {
  image: string;
  category: string;
  author: string;
  date: string;
  title: string;
  _id: string;
  content?: string;
}

export default function PublicSpeaking() {
  const [socialProjects, setSocialProjects] = useState<BlogPost[]>([]);
  const [isLoadingSocial, setIsLoadingSocial] = useState(true);
  const [upGreenProjects, setUpGreenProjects] = useState<BlogPost[]>([]);
  const [isLoadingUpGreen, setIsLoadingUpGreen] = useState(true);
  const [educationProject, setEducationProject] = useState<BlogPost | null>(null);
  const [isLoadingEducation, setIsLoadingEducation] = useState(true);

  useEffect(() => {
    const fetchSocialProjects = async () => {
      setIsLoadingSocial(true);
      try {
        const response = await fetch('/api/blog?type=social');
        
        if (!response.ok) {
          throw new Error('Failed to fetch social projects');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          const formattedPosts = result.data.map((post: any) => ({
            image: post.imageUrl || Blog.src,
            category: post.category,
            author: post.author,
            date: new Date(post.date).toLocaleDateString('en-US', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            }),
            title: post.title,
            _id: post._id
          }));
          setSocialProjects(formattedPosts);
        }
      } catch (error) {
        console.error('Error fetching social projects:', error);
      } finally {
        setIsLoadingSocial(false);
      }
    };

    const fetchUpGreenProjects = async () => {
      setIsLoadingUpGreen(true);
      try {
        const response = await fetch('/api/blog?type=upgreen&limit=3');
        
        if (!response.ok) {
          throw new Error('Failed to fetch upgreen projects');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          const formattedPosts = result.data.map((post: any) => ({
            image: post.imageUrl || Blog.src,
            category: post.category || "UpGreen",
            author: post.author || "Doris Do",
            date: new Date(post.date).toLocaleDateString('en-US', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            }),
            title: post.title || "UpGreen Project",
            _id: post._id
          }));
          setUpGreenProjects(formattedPosts);
        }
      } catch (error) {
        console.error('Error fetching upgreen projects:', error);
      } finally {
        setIsLoadingUpGreen(false);
      }
    };

    const fetchEducationProject = async () => {
      setIsLoadingEducation(true);
      try {
        const response = await fetch('/api/blog?type=education&limit=1&sortBy=date&sortOrder=asc');
        
        if (!response.ok) {
          throw new Error('Failed to fetch education project');
        }
        
        const result = await response.json();
        
        if (result.success && result.data && result.data.length > 0) {
          const post = result.data[0];
          setEducationProject({
            image: post.imageUrl || Frame2.src,
            category: post.category || "Education",
            author: post.author || "Doris Do",
            date: new Date(post.date).toLocaleDateString('en-US', { 
              day: '2-digit', 
              month: 'short', 
              year: 'numeric' 
            }),
            title: post.title || "Education Project",
            _id: post._id,
            content: post.content || ""
          });
        }
      } catch (error) {
        console.error('Error fetching education project:', error);
      } finally {
        setIsLoadingEducation(false);
      }
    };

    fetchSocialProjects();
    fetchUpGreenProjects();
    fetchEducationProject();
  }, []);

  return (
    <div className={urbanist.className}>
      <section
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-auto min-h-[500px] mx-auto overflow-hidden rounded-[49px]"
      >
        <div className="absolute inset-0 bg-black/50 opacity-15 rounded-[49px]"></div>

        <div className="relative z-10 py-8 md:py-16 max-w-screen-xl mx-auto flex flex-col px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-24">
            <h2
              className="text-3xl sm:text-4xl mt-8 sm:mt-[116px] md:text-5xl font-sm mb-6 md:mb-0 flex flex-col transition-all duration-300 hover:scale-105"
            >
              <span className="text-white hover:text-blue-400 transition-colors duration-300">Public</span>
              <span className="text-white hover:text-blue-400 transition-colors duration-300">Speaking</span>
            </h2>

            <p
              className="text-white/80 text-2xl max-w-md mt-0 sm:mt-8 md:mt-[116px] transition-all duration-300 hover:text-white hover:scale-105 transform"
            >
        “Real change starts with the courage to speak up – and the heart to act.”
            </p>
          </div>

          <ImageSlider type="speaking"/>
        </div>
      </section>
      <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center  mb-4">
        <h2 className="text-4xl font-semibold w-1/2">
          <span className="text-[#344054]">Social <span className="text-[#FD853A]">Projects</span> that Make a Difference</span>
        </h2>
   
        <Link href="/social">
          <Button className="bg-[#FD853A] hover:bg-[#FF9B5C] text-white px-6 py-6 rounded-full font-medium hover:scale-105 hover:shadow-lg">
            See All
          </Button>
        </Link>
      </div>
      <p className="text-gray-600 mt-2 max-w-2xl mb-8">
      I’m passionate about driving social change through sustainability.
      From education to circular design, my projects turn purpose into action – connecting people and planet through impact-driven work.
        </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {isLoadingSocial ? (
          <div className="col-span-3 flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#329A1F]"></div>
          </div>
        ) : socialProjects.length > 0 ? (
          socialProjects.slice(0, 3).map((blog, index) => (
            <BlogCard key={index} id={blog._id} image={blog.image} category={blog.category} author={blog.author} date={blog.date} title={blog.title} />
          ))
        ) : (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">No social projects found</h3>
            <p className="text-gray-600">Check back later for new content.</p>
          </div>
        )}
      </div>
    </div>
    <section
        style={{
          backgroundImage: `url(${UpgreenBack.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-auto min-h-[500px] mx-auto overflow-hidden rounded-[49px]"
      >
        <div className="absolute inset-0 bg-black/50 opacity-15 rounded-[49px]"></div>

        <div className="relative z-10 py-8 md:py-16 max-w-screen-xl mx-auto flex flex-col px-4">
          <div className="flex flex-col items-center mb-2 md:mb-24">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-sm mb-6 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col">
                <span className="text-[#329A1F] hover:text-white transition-colors duration-300">UPGREEN</span>
                <span className="text-blue-400 hover:text-white transition-colors duration-300">VIETNAM</span>
              </div>
            </h2>

            <h3 className="text-2xl font-semibold text-white mb-4">Designing a Circular Future</h3>
            <p
              className="text-white/80 px-20 mt-4 w-3/4 transition-all duration-300 hover:text-white hover:scale-105 transform"
            >
      At UPGREEN VIETNAM, we reimagine waste as a resource for creativity and change. Our products are more than just recycled – they are stories crafted with purpose, tradition, and vision for a greener tomorrow.
            </p>
          </div>
        
          <ImageSlider type="upgreen"/>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-semibold">
          <div className="flex flex-col">
            <span className="w-2/3 text-[#344054]">Youth Empowerment 
              <span className="text-blue-400"> Through Education</span>
            </span>
          </div>
        </h2>
        <Link href="/education">
          <Button className="bg-[#7C9971] hover:bg-[#FF9B5C] text-[18px] text-white px-6 py-6 rounded-full font-medium hover:scale-105 hover:shadow-lg">
            View More 
            <ArrowRight size={24} className="-rotate-45"/>
          </Button>
        </Link>
      </div>
      
      {isLoadingEducation ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#329A1F]"></div>
        </div>
      ) : educationProject ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col w-3/4">
            <h3 className="text-2xl font-semibold mb-2">
              {educationProject.title}
            </h3>
            <div 
              className=" mb-6 line-clamp-6"
              dangerouslySetInnerHTML={{ 
                __html: educationProject.content?.substring(0, 10000) + '...'
              }}
            />
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={educationProject.image} 
              alt={educationProject.title} 
              className="w-full h-full max-h-[400px] object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col w-3/4">
            <h3 className="text-2xl font-semibold mb-12">
              Empowering the next generation to dream big, build smart, and rise global
            </h3>
            <p className="text-[#98A2B3] mb-6">
              Minh sáng lập APPYSIS - nền tảng mentor học bổng giúp hàng trăm bạn trẻ Việt Nam tiếp cận học bổng quốc tế.
              Bên cạnh đó, mình tổ chức các lớp học, workshop và chiến dịch nâng cao năng lực cho giới trẻ và phát triển bền vững. Tự duy toàn cầu và cách làm dự án xã hội tử số 0.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={Frame2.src} 
              alt="Youth empowerment through education" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </div>
    <div className="relative w-full h-auto min-h-[800px] mx-auto overflow-hidden rounded-[49px] my-16">
      <div className="absolute inset-0 z-0">
        <img 
          src={GlobalBack.src} 
          alt="Global Connector background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 z-10 mx-24 my-24 rounded-[49px] bg-black/30 backdrop-blur-[3px]"></div>
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center py-16 px-4">
        <h2 className="text-5xl font-semibold text-white pt-20 mt-20 mb-18 text-center">
          Global Connector & Changemaker
        </h2>
        
        <h3 className="text-white text-center max-w-3xl mb-8">From Vietnam to Alpbach – I speak, connect, and collaborate for global impact.</h3>
        <p className="text-white/80 text-center max-w-2xl mb-20">
          As a fellow of international programs like the European Forum Alpbach, I bring Vietnamese voices to global dialogues. I work across borders to scale solutions, co-create with changemakers worldwide, and advocate for youth participation in shaping a sustainable future.
        </p>
        <Link href="/global">
        <button className="hover:bg-white/30 text-2xl backdrop-blur-sm border border-white/50 text-white px-10 py-6 rounded-full transition-all duration-300 hover:scale-105">
          Get in touch
        </button>
        </Link>
      </div>
    </div>
    <ContactForm hasBackground={false} />
    </div>
  );
}

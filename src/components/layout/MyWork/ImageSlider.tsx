import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Urbanist } from "next/font/google";
import Frame2 from "@/public/assets/images/italia.png";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Slide {
  _id: string;
  id: number;
  image: string;
  title: string;
}

const ImageSlider = ({ type }: { type: string }) => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const [isLoading, setIsLoading] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSpeakingPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/blog?type=${type}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch speaking posts');
        }
        
        const result = await response.json();
        
        if (result.success && result.data) {
          const formattedSlides = result.data.map((post: any, index: number) => ({
            _id: post._id,
            id: index + 1,
            image: post.imageUrl || Frame2.src,
            title: post.title || "Speaking Event",
          }));
          setSlides(formattedSlides);
        }
      } catch (error) {
        console.error('Error fetching speaking posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpeakingPosts();
  }, []);

  const clonedSlides = [...slides, ...slides.slice(0, 2)];

  const nextSlide = () => {
    if (isTransitioning || slides.length === 0) return;
    
    setDirection('right');
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (prev >= slides.length - 1) {
        return prev + 1;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    if (isTransitioning || slides.length === 0) return;
    
    setDirection('left');
    setIsTransitioning(true);
    setCurrentSlide((prev) => {
      if (prev <= 0) {
        return slides.length - 1;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    if (slides.length === 0) return;
    
    if (currentSlide >= slides.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 500);
      return () => clearTimeout(timer);
    }
    
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  useEffect(() => {
    if (slides.length === 0) return;
    
    const autoplayInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(autoplayInterval);
  }, [currentSlide, isTransitioning, slides.length]);

  if (isLoading) {
    return (
      <div className="relative mt-8 h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="relative mt-8 h-[300px] flex items-center justify-center">
        <p className="text-white text-xl">No speaking events found</p>
      </div>
    );
  }

  return (
    <div className="relative mt-8 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="relative w-full overflow-hidden">
          <div 
            ref={slideRef}
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ 
              transform: `translateX(-${currentSlide * 50}%)`,
              transition: isTransitioning ? 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
            }}
          >
            {clonedSlides.map((slide, index) => (
              <div 
                key={`slide-${index}`} 
                className={`min-w-[50%] md:min-w-[50%] mr-1 relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  index === currentSlide % clonedSlides.length ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
                }`}
              >
                <Link href={`/blog/${slide._id}`}>
                <div className="relative h-[250px] md:h-[300px] overflow-hidden group">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6 transform transition-transform duration-500 translate-y-0 group-hover:translate-y-[-8px]">
                    <h3 className={`text-4xl font-bold text-white ${urbanist.className}`}>{slide.title}</h3>
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button 
        onClick={prevSlide} 
        className="absolute border-6 text-white border-white top-1/2 -translate-y-1/2 bg-[#344054] rounded-full p-2 shadow-lg z-10 left-2 transition-all duration-300 hover:bg-[#4a5a75] hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute border-6 border-white text-white right-2 top-1/2 -translate-y-1/2 bg-[#FD853A] rounded-full p-2 shadow-lg z-10 transition-all duration-300 hover:bg-[#ff9a5a] hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide % slides.length ? 'right' : 'left');
                setIsTransitioning(true);
                setCurrentSlide(index);
              }}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentSlide % slides.length === index 
                  ? 'bg-orange-500 w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        <Link href={`/${type}`} className="flex items-center gap-2 rounded-2xl px-4 py-2 hover:bg-white text-[#F3FCF0] hover:text-[#329A1F] font-medium transition-colors duration-300">
          <span className="font-bold">View All</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Urbanist } from "next/font/google"
import { motion, AnimatePresence } from "motion/react"
import Arboard from "@/public/assets/images/upgreen.png"
import Italia from "@/public/assets/images/slide3.png"
import Background from "@/public/assets/images/global.png"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

interface SlideProps {
  id: number
  image: any
  title: string
  description: string
}

export default function Slider() {
  const slides: SlideProps[] = [
    {
      id: 1,
      image: Arboard,
      title: "Environmental Advocate",
      description: "I don’t just talk about sustainability — I live it, build it, and grow with it. I am a sustainability enthusiast – from founding UPGREEN Vietnam with recycled plastic products to organizing recycling campaigns and spreading green living in the community. I believe that change starts with small actions, and I want to turn every creative project into a part of the environmental solution."
    },
    {
      id: 2,
      image: Italia,
      title: "Youth Empowerment Through Education",
      description: "Empowering the next generation to dream big, build smart, and rise global. I founded APPYSIS – a scholarship mentoring platform helping hundreds of Vietnamese youth access international scholarships. Additionally, I organize classes, workshops, and campaigns to enhance youth capabilities in sustainable development, global thinking, and building social projects from scratch."
    },
    {
      id: 3,
      image: Background,
      title: "Global Connector & Changemaker",
      description: "From Venice to Alpbach, I speak for change and collaborate for impact. I represent Vietnam in international programs like European Forum Alpbach, Youth4Ocean Forum, and global conferences. I not only connect and share environmental initiatives, but also build bridges between Vietnamese youth and the world through speaking, collaboration, and global expert networks."
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      nextSlide()
    }, 8000)

    return () => {
      resetTimeout()
    }
  }, [currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="py-16 mb-16">
      <h1 className="text-5xl text-[#2d3142] font-bold text-center mb-4 tracking-tight">My <span className="text-[#4CB5F0]">Works</span></h1>
      <div className="relative w-full max-w-6xl mx-auto h-[650px] overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute top-1/2 left-6 z-20 transform -translate-y-1/2">
          <button 
            onClick={prevSlide}
            className=" hover:bg-[#95B788] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft size={28} />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-6 z-20 transform -translate-y-1/2">
          <button 
            onClick={nextSlide}
            className="hover:bg-[#95B788] text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentIndex ? "bg-[#4CB5F0] w-10" : "bg-white/70 w-3 hover:bg-white"
              }`}
            />
          ))}
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.1 },
            }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="relative w-full h-full">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <motion.h2 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className={`text-5xl md:text-7xl font-bold mb-8 text-white ${urbanist.className} drop-shadow-lg`}
                >
                  {slides[currentIndex].title}
                </motion.h2>
                
                <motion.p 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className={`text-xl max-w-2xl text-[#F3FCF0] ${urbanist.className} drop-shadow-md`}
                >
                  {slides[currentIndex].description}
                </motion.p>
                
                <motion.div 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mt-12"
                >
                  <button className="hover:bg-[#4CB5F0] backdrop-blur-sm border border-[#4CB5F0] border-opacity-50 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg font-medium tracking-wide">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
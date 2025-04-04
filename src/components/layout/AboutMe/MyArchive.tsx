"use client"
import { useState } from "react"
import Image from "next/image"
import { Urbanist } from "next/font/google"
import { motion } from "motion/react"
import Background from "@/public/assets/images/back-1.png"
import arboard from "@/public/assets/images/arboard.png"
import italia from "@/public/assets/images/italia.png"
import digital from "@/public/assets/images/Water.png"
import event from "@/public/assets/images/event.png"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

interface GalleryItemProps {
  id: number
  image: any
  title: string
  description: string
  size?: "small" | "medium" | "large"
}

export default function ImageGallery() {
  const galleryItems: GalleryItemProps[] = [
    {
      id: 1,
      image: arboard,
      title: "Environmental Design",
      description: "Creating sustainable solutions for a greener future through innovative design approaches.",
      size: "large"
    },
    {
      id: 2,
      image: italia,
      title: "Global Projects",
      description: "Working with international teams to deliver impactful solutions across different cultures.",
      size: "medium"
    },
    {
      id: 3,
      image: italia,
      title: "Recycling Initiatives",
      description: "Transforming waste into valuable resources through creative design thinking.",
      size: "small"
    },
    {
        id: 4,
        image: italia,
        title: "Recycling Initiatives",
        description: "Transforming waste into valuable resources through creative design thinking.",
        size: "small"
      },
    {
      id: 5,
      image: event,
      title: "Sustainable Architecture",
      description: "Designing buildings that minimize environmental impact while maximizing efficiency and comfort.",
      size: "medium"
    },
    {
      id: 6,
      image: Background,
      title: "Urban Planning",
      description: "Creating livable cities through thoughtful design and community-focused development strategies.",
      size: "small"
    },
    {
      id: 7,
      image: digital,
      title: "Digital Innovation",
      description: "Leveraging technology to create sustainable solutions for modern environmental challenges.",
      size: "small"
    }
  ]

  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <div className="relative py-16 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src={digital}
          alt="Background"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/20 "></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl text-[#F3FCF0] font-bold text-center mb-6 tracking-tight">Highlight <span className="text-[#FD853A]">Achievement</span></h1>
        <p className="text-center text-[#F3FCF0]/80 max-w-3xl mx-auto mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a elementum. Sed laoreet, consectetur adipiscing elit. Sed laorris erat, elementum egestas laorris.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 backdrop-blur-sm lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className={`relative rounded-2xl overflow-hidden shadow-xl group
                ${item.size === "small" ? "col-span-1 row-span-1" : 
                  item.size === "medium" ? "col-span-1 md:col-span-2 row-span-1" : 
                  "col-span-1 md:col-span-2 row-span-2"}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: hoveredItem === item.id ? 20 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-2xl font-semibold text-white ${urbanist.className} drop-shadow-lg`}
                >
                  {item.title}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredItem === item.id ? 1 : 0,
                    height: hoveredItem === item.id ? "auto" : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className={`text-[#F3FCF0] mt-2 ${urbanist.className} overflow-hidden`}
                >
                  {item.description}
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 bg-[#4CB5F0] text-white text-xs px-3 py-1 rounded-full cursor-pointer"
                onClick={() => setSelectedItem(item.id)}
              >
                View
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setSelectedItem(null)}>
          <div className="relative bg-white rounded-xl overflow-hidden max-w-5xl w-full max-h-[95vh]" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-2" onClick={() => setSelectedItem(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative w-full md:w-3/4 h-[400px] md:h-[600px]">
                <Image
                  src={galleryItems.find(item => item.id === selectedItem)?.image || Background}
                  alt={galleryItems.find(item => item.id === selectedItem)?.title || ""}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/4 p-6 bg-white">
                <h2 className={`text-3xl font-bold text-[#2d3142] mb-4 ${urbanist.className}`}>
                  {galleryItems.find(item => item.id === selectedItem)?.title}
                </h2>
                <p className={`text-gray-700 ${urbanist.className}`}>
                  {galleryItems.find(item => item.id === selectedItem)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProfileImage from "@/public/assets/images/profile.png"
import { Urbanist } from "next/font/google"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
})

export default function ProfileSection() {
  return (
    <section className="min-h-screen flex items-center justify-center mt-20 p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
        <div className="relative flex justify-center md:justify-end animate-fadeIn">
          <Image
            src={ProfileImage}
            alt="Profile photo of a woman with curly hair wearing an orange jacket"
            className="relative z-10 transition-all duration-500 hover:scale-105 hover:rotate-2"
          />
        </div>

        <div className="space-y-8 animate-slideInRight">
          <h1 className={`text-[64px] font-semibold text-[#344054] leading-none tracking-[-0.96px] ${urbanist.className} animate-fadeIn transition-all duration-300 hover:text-orange-500`}>
            Who <span className="text-orange-500 animate-pulse">Am I</span>?
          </h1>

          <p className={`text-[#98A2B3] w-112 text-[20px] tracking-[-0.3px] ${urbanist.className} transition-all duration-300 hover:text-[#344054]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate
            bibendum sodales
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="transform transition-all duration-300 hover:scale-110">
              <h2 className={`text-2xl md:text-3xl font-semibold text-[#2d3142] ${urbanist.className} animate-countUp`}>20+</h2>
              <p className={`text-[#98A2B3] w-12 text-sm ${urbanist.className}`}>Achievement Granted</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110">
              <h2 className={`text-2xl md:text-3xl font-semibold text-[#2d3142] ${urbanist.className} animate-countUp`}>10+</h2>
              <p className={`text-[#98A2B3] w-12 text-sm ${urbanist.className}`}>Country Traveled</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110">
              <h2 className={`text-2xl md:text-3xl font-semibold text-[#2d3142] ${urbanist.className} animate-countUp`}>5+</h2>
              <p className={`text-[#98A2B3] w-12 text-sm ${urbanist.className}`}>Project</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`flex flex-wrap gap-4 drop-shadow-lg ${urbanist.className}`}>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Environment</span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Global</span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Recycle</span>
            </div>
            <div className={`flex flex-wrap gap-4 drop-shadow-lg ${urbanist.className}`}>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Environment</span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Global</span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Recycle</span>
            </div>
          </div>

          <div>
            <Button
              variant="outline"
              className={`rounded-full px-12 py-8 border-[#2d3142] text-[#2d3142] hover:bg-[#2d3142] hover:text-white text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${urbanist.className}`}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProfileImage from "@/public/assets/images/Doris2.png"
import { Urbanist } from "next/font/google"
import Link from "next/link"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
})

export default function ProfileSection() {
  return (
    <div>
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
          I'm a sustainability advocate, creative entrepreneur, and youth mentor based in Vietnam. I bring ideas to life through impactful green projects, inspiring content, and educational programs that empower the next generation of changemakers.
          Driven by purpose, I believe in turning bold dreams into real action – one story, one product, one person at a time.
          </p>

          <div className="grid grid-cols-3 gap-4">
            <div className="transform transition-all duration-300 hover:scale-110">
              <h2 className={`text-2xl md:text-3xl font-semibold text-[#2d3142] ${urbanist.className} animate-countUp`}>20+</h2>
              <p className={`text-[#98A2B3] w-32 text-md ${urbanist.className}`}>Achievements & Fellowships Earned</p>
              {/* <p className={`text-[#98A2B3] text-xs italic ${urbanist.className}`}>(from global scholarships to innovation grants)</p> */}
            </div>
            <div className="transform transition-all duration-300 hover:scale-110">
              <h2 className={`text-2xl md:text-3xl font-semibold text-[#2d3142] ${urbanist.className} animate-countUp`}>20+</h2>
              <p className={`text-[#98A2B3] w-32 text-md ${urbanist.className}`}>Countries Traveled & Collaborated</p>
              {/* <p className={`text-[#98A2B3] text-xs italic ${urbanist.className}`}>(spanning Asia, Europe, and beyond)</p> */}
            </div>
            <div className="transform transition-all duration-300 hover:scale-110">
              <h2 className={`text-2xl md:text-3xl font-semibold text-[#2d3142] ${urbanist.className} animate-countUp`}>5+</h2>
              <p className={`text-[#98A2B3] w-32 text-md ${urbanist.className}`}>Projects Led & Co-Created</p>
              {/* <p className={`text-[#98A2B3] text-xs italic ${urbanist.className}`}>(in sustainability, youth empowerment, and circular design)</p> */}
            </div>
          </div>

          <div className="space-y-4">
            <div className={`flex flex-wrap gap-4 drop-shadow-lg ${urbanist.className}`}>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Sustainability</span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Circular Economy</span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Youth Empowerment
              </span>
            </div>
            <div className={`flex flex-wrap gap-4 drop-shadow-lg ${urbanist.className}`}>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Creative Design
              </span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Creative Design
              </span>
              <span className={`px-6 py-2 bg-gradient-to-r from-[#F2C4F7] to-[#E4E7EC] rounded-full text-[#2d3142] text-sm ${urbanist.className} transform transition-all duration-300 hover:scale-110 hover:shadow-xl`}>Scholarship Mentorship</span>
            </div>
          </div>

          <div>
            <Link href="/contact">
            <Button
              variant="outline"
              className={`rounded-full px-12 py-8 border-[#2d3142] text-[#2d3142] bg-white hover:bg-[#2d3142] hover:text-white text-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${urbanist.className}`}
            >
              Contact
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <div>
    <div className="max-w-screen-xl mx-auto py-16">
      <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <h2 className={`text-3xl md:text-4xl font-semibold text-[#329A1F] mb-6 ${urbanist.className}`}>
          My <span className="text-[#344054]">Story</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className={`text-[#344054] text-2xl font-bold ${urbanist.className}`}>Hi, I'm Trang Do
              <span className={`text-[#344054] text-lg ${urbanist.className}`}> – though in most circles, I go by Doris.</span>
            </p>
            <p className={`text-[#344054] text-lg ${urbanist.className}`}>
            I'm a sustainability advocate, social entrepreneur, and youth mentor from Vietnam, working at the intersection of environmental innovation, creative storytelling, and transformative education. My mission is to turn bold ideas into real-world impact through purpose-driven projects and community engagement.
            </p>
            <p className={`text-[#344054] text-lg ${urbanist.className}`}>
              I hold a Bachelor's degree in International Business from Foreign Trade University (FTU), and a Master of Business Administration (MBA) in Entrepreneurship from the Swiss School of Management in Rome. These academic foundations have shaped my journey of building ventures that combine creativity, strategy, and sustainability.
            </p>
          </div>
          <div className="border-l border-gray-300 pl-8 space-y-4">
            <p className={`text-[#344054] text-lg ${urbanist.className}`}>
            As the co-founder and CFO of UPGREEN Vietnam, I lead a team that transforms plastic waste into artistic, culturally-rooted, and eco-friendly products. Through UPGREEN, I explore the potential of circular economy models to create social, environmental, and economic value.
            </p>
            <p className={`text-[#344054] text-lg ${urbanist.className}`}>
              Alongside sustainability, I'm passionate about creative storytelling – using writing, design, and digital content to spark meaningful conversations around culture, identity, and change. I believe that stories have the power to move people – and movements.
            </p>
            <p className={`text-[#344054] text-lg ${urbanist.className}`}>
              I also founded APPYSIS, a mentoring platform where I've helped hundreds of young people across Southeast Asia win fully-funded scholarships and launch global careers. Whether it's through workshops, coaching, or hands-on project support, I'm committed to empowering the next generation of changemakers.
            </p>
            <p className={`text-[#344054] text-lg ${urbanist.className}`}>
              This website is a reflection of the work I do and the values I live by – <span className="text-[#329A1F] font-semibold">sustainability</span>, <span className="text-[#4CB5F0] font-semibold">creativity</span>, and <span className="text-[#FD853A] font-semibold">impact</span>.
              Thanks for being here 🌱
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>      
    </div>
  )
}

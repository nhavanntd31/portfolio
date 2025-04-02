import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import BackgroundImage from "@/public/assets/images/back-1.png"
import { Urbanist } from "next/font/google"

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
}); 

export default function AboutMentor() {
  return (
    <section style={{ backgroundImage: `url(${BackgroundImage.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="relative w-full h-[calc(845/1440*100vw)] mx-auto overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 py-16 max-w-screen-xl mx-auto h-full flex flex-col">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0 flex items-center" style={{ fontFamily: urbanist.style.fontFamily }}>
            <span className="text-white">About </span>
            <span className="text-blue-400 ml-2">Me</span>
          </h2>

          <p className="text-white/80 max-w-md mt-2" style={{ fontFamily: urbanist.style.fontFamily }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate,
            bibendum sodales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
          <div className="backdrop-blur-sm border border-[#F3FCF0] rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="py-5 p-0 flex flex-col h-full">
              <h3 className="text-[#F3FCF0] text-center text-[26px] font-bold mb-3" style={{ fontFamily: urbanist.style.fontFamily }}>Environmental Advocate</h3>

              <div className="bg-white/10 border border-[#F3FCF0] mb-3 flex-grow">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Environmental App Interface"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex justify-end mt-auto">
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight className="text-white" size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-white text-xl font-medium mb-3" style={{ fontFamily: urbanist.style.fontFamily }}>Youth Empowerment Through Education</h3>

              <div className="bg-white/10 rounded-2xl p-3 mb-3 flex-grow">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Education App Interface"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex justify-end mt-auto">
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight className="text-white" size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full">
            <div className="p-5 flex flex-col h-full">
              <h3 className="text-white text-xl font-medium mb-3" style={{ fontFamily: urbanist.style.fontFamily }}>Global Connector & Changemaker</h3>

              <div className="bg-white/10 rounded-2xl p-3 mb-3 flex-grow">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Global Connection App Interface"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex justify-end mt-auto">
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                  <ArrowUpRight className="text-white" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image";
import { ArrowUpRight, Link } from "lucide-react";
import BackgroundImage from "@/public/assets/images/back-1.png";
import { Urbanist } from "next/font/google";
import Frame2 from "@/public/assets/images/Frame2.png";
import Envi from "@/public/assets/images/homepage/envi.png";
import Global from "@/public/assets/images/homepage/global.png";
import Youth from "@/public/assets/images/homepage/youth.png";
import About1 from "@/public/assets/images/homepage/about1.png";
import About2 from "@/public/assets/images/homepage/about2.png";
import About3 from "@/public/assets/images/homepage/about3.png";
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const ImageCard = ({ image, linkTo }: { image: any, linkTo: string }) => (
  <div className="relative w-full">
    <Image
      src={image}
      alt="Environmental App Interface"
      width={416}
      height={283}
      className="card-image-with-svg-mask transition-all duration-300 hover:scale-105 hover:shadow-xl w-full h-auto"
      style={{
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "12px"
      }}
    />
    <Link href={linkTo} className="absolute text-white bottom-3 right-4 bg-[#7C9971] rounded-full p-6 hover:scale-110 hover:bg-[#95B788] transition-all duration-300 cursor-pointer hover:rotate-12">
      <ArrowUpRight size={50} className="transition-transform duration-300 hover:rotate-45"/>
    </Link>
  </div>
);

export const FocusCard = ({ title, image, description }: { title: string, image: string, description: string }) => (
  <div className="flex flex-col items-center group">
    <div 
      className="h-[300px] w-[300px] rounded-b rounded-[120%] border border-black bg-white p-8 mb-6 transition-all duration-300 ease-in-out transform group-hover:scale-105 hover:shadow-lg"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    />
    <h3 className="text-2xl font-semibold mb-2 transition-all duration-300 text-[#344054] group-hover:text-[#FD853A]" style={{ fontFamily: urbanist.style.fontFamily }}>{title}</h3>
    <p className="text-center text-gray-600 transition-all duration-300 group-hover:text-gray-900" style={{ fontFamily: urbanist.style.fontFamily }}>{description}</p>
  </div>
);

export default function AboutMentor() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${BackgroundImage.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-auto min-h-[500px]  mx-auto overflow-hidden rounded-[49px]"
      >
        <div className="absolute inset-0 bg-black/50 rounded-[49px]"></div>

        <div className="relative z-10 py-8 md:py-16 max-w-screen-xl mx-auto flex flex-col px-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 md:mb-24">
            <h2
              className="text-3xl sm:text-4xl mt-8 sm:mt-[116px] md:text-5xl font-sm mb-6 md:mb-0 flex items-center transition-all duration-300 hover:scale-105"
              style={{ fontFamily: urbanist.style.fontFamily }}
            >
              <span className="text-white hover:text-blue-400 transition-colors duration-300">About </span>
              <span className="text-blue-400 ml-2 hover:text-white transition-colors duration-300">Me</span>
            </h2>

            <p
              className="text-white/80 text-2xl max-w-md mt-0 sm:mt-8 md:mt-[116px] transition-all duration-300 hover:text-white hover:scale-105 transform"
              style={{ fontFamily: urbanist.style.fontFamily }}
            >
             I bring together sustainability, creativity, and education to drive meaningful impact.

            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ImageCard image={Envi} linkTo="/upgreen" />
            <ImageCard image={Global} linkTo="/global" />
            <ImageCard image={Youth} linkTo="/education" />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center py-12 md:py-20 bg-[#F3FCF0]">
        <div className="text-3xl sm:text-4xl font-bold text-[#344054] text-center mb-10 md:mb-16 px-4" style={{ fontFamily: urbanist.style.fontFamily }}>My Core
          <span className="text-[#FD853A]"> Values</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <FocusCard title="Sustainability & Impact" image={About1.src} description=" I design and lead innovative projects that tackle plastic waste, promote circular economy solutions, and raise environmental awareness. At UPGREEN Vietnam, we turn discarded plastic into beautiful, purposeful products – reconnecting people with cultural values while inspiring greener lifestyles." />
          <FocusCard title="Creative Storytelling" image={About2.src} description="I use writing, visual design, and video to tell stories that matter – stories about people, culture, and social transformation. Whether it's a campaign, a short film, or a digital post, I believe storytelling is a powerful tool to make complex issues more human, relatable, and inspiring" />
          <FocusCard title=" Education & Mentoring" image={About3.src} description="Through APPYSIS, online classes, and workshops, I mentor young people in applying for scholarships, launching social projects, and thinking globally. My mission is to equip youth with the mindset, tools, and confidence to shape the future they believe in." />
        </div>
      </div>
    </div>
  );
}

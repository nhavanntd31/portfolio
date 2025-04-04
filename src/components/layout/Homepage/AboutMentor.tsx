import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import BackgroundImage from "@/public/assets/images/back-1.png";
import { Urbanist } from "next/font/google";
import Frame2 from "@/public/assets/images/Frame2.png";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const ImageCard = () => (
  <div className="relative w-full">
    <Image
      src={Frame2}
      alt="Environmental App Interface"
      width={416}
      height={283}
      className="card-image-with-svg-mask transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{
        objectFit: "cover"
      }}
    />
    <div className="absolute text-white bottom-3 right-4 bg-[#7C9971] rounded-full p-6 hover:scale-110 hover:bg-[#95B788] transition-all duration-300 cursor-pointer hover:rotate-12">
      <ArrowUpRight size={50} className="transition-transform duration-300 hover:rotate-45"/>
    </div>
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
    <h3 className="text-2xl font-semibold mb-2 transition-all duration-300 group-hover:text-[#FD853A]" style={{ fontFamily: urbanist.style.fontFamily }}>{title}</h3>
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
        className="relative w-full h-[calc(845/1440*100vw)] mx-auto overflow-hidden rounded-[49px]"
      >
        <div className="absolute inset-0 bg-black/50 rounded-[49px]"></div>

        <div className="relative z-10 py-16 max-w-screen-xl mx-auto flex flex-col">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-24">
            <h2
              className="text-4xl mt-[116px] md:text-5xl font-sm mb-6 md:mb-0 flex items-center transition-all duration-300 hover:scale-105"
              style={{ fontFamily: urbanist.style.fontFamily }}
            >
              <span className="text-white hover:text-blue-400 transition-colors duration-300">About </span>
              <span className="text-blue-400 ml-2 hover:text-white transition-colors duration-300">Me</span>
          </h2>

            <p
              className="text-white/80 max-w-md mt-[116px] transition-all duration-300 hover:text-white hover:scale-105 transform"
              style={{ fontFamily: urbanist.style.fontFamily }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
              nunc, posuere in justo vulputate, bibendum sodales.
            </p>
          </div>
          <div className="flex gap-4">
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center py-20 bg-[#F3FCF0]">
        <div className="text-4xl font-bold text-[#344054] text-center mb-16" style={{ fontFamily: urbanist.style.fontFamily }}>Design
          <span className="text-[#FD853A]"> Focuses</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <FocusCard title="Print" image={BackgroundImage.src} description="Design Unleashed Behind the Scenes of UI/UX Magic" />
          <FocusCard title="Branding" image={BackgroundImage.src} description="Design Unleashed Behind the Scenes of UI/UX Magic" />
          <FocusCard title="Illustration" image={BackgroundImage.src} description="Design Unleashed Behind the Scenes of UI/UX Magic" />
        </div>
      </div>
    </div>
  );
}

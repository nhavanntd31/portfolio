import Image from "next/image"
import { ArrowRight } from "lucide-react"
import MentorImage from "@/public/assets/images/woman1.png"
import { Button } from "@/components/ui/button"
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Banner() {
  return (
    <section className="relative pt-25 bg-[#F3FCF0] w-full overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          <div className="flex justify-center mb-4">
            <Button className="bg-[#7C9971] text-[#F6EDD9] mt-4 px-8 py-8 rounded-full text-[30px]">Hello!</Button>
          </div>

          <h1 className="leading-tight text-center" style={{ fontFamily: urbanist.style.fontFamily, fontWeight: 600, lineHeight: '95.57px', wordWrap: 'break-word' }}>
            <span style={{ color: '#329A1F', fontSize: '95.57px' }}>I'm </span>
            <span style={{ color: '#4CB5F0', fontSize: '95.57px' }}>Doris Do,</span>
            <br />
            <span style={{ color: '#329A1F', fontSize: '95.57px' }} className="text-[#329A1F] font-size-10">Global Entrepreneurship</span>
          </h1>

          <div className="relative flex justify-center -mt-32 ">
<div className="absolute top-75 left-1/2 transform -translate-x-1/2 w-[800px] h-[1000px] bg-[#F6EDD9] rounded-t-full -z-10"></div>
            <Image
              src={MentorImage}
              alt="Doris Do - Global Entrepreneur"
              className="relative z-10 w-[85%]"
            />
          </div>

          <div className="absolute -left-10 top-1/2 max-w-[330px] z-20">
            <div className="relative pl-6 border-gray-300">
              <svg width="36" height="36" className="inline-block mb-4" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.135 17.445H5.1C5.22 10.44 6.6 9.285 10.905 6.735C11.4 6.435 11.565 5.805 11.265 5.295C10.98 4.8 10.335 4.635 9.84 4.935C4.77 7.935 3 9.765 3 18.48V26.565C3 29.13 5.085 31.2 7.635 31.2H12.135C14.775 31.2 16.77 29.205 16.77 26.565V22.065C16.77 19.44 14.775 17.445 12.135 17.445Z" fill="#344054"/>
                <path d="M28.365 17.445H21.33C21.45 10.44 22.83 9.285 27.135 6.735C27.63 6.435 27.795 5.805 27.495 5.295C27.195 4.8 26.565 4.635 26.055 4.935C20.985 7.935 19.215 9.765 19.215 18.495V26.58C19.215 29.145 21.3 31.215 23.85 31.215H28.35C30.99 31.215 32.985 29.22 32.985 26.58V22.08C33 19.44 31.005 17.445 28.365 17.445Z" fill="#344054"/>
              </svg>
              
              <p style={{ color: '#344054', fontSize: 20, fontFamily: 'Urbanist', fontWeight: '500', wordWrap: 'break-word' }}>
                Jenny's Exceptional product design ensure our website's success.
                Highly Recommended
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 max-w-[380px] rounded-full border-2 border-white px-2 py-2 mx-auto backdrop-blur-md backdrop-filter absolute bottom-15 left-1/2 transform -translate-x-1/2 z-20 shadow-md">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#7C9971] hover:bg-green-700 text-[#F3FCF0] px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ color: '#F3FCF0', fontSize: '25.69px', fontFamily: 'Urbanist', fontWeight: '300', wordWrap: 'break-word' }}
            >
              About Me
              <ArrowRight size={32} className="-rotate-45" />
            </a>
            <a
              href="#"
              style={{ color: '#F3FCF0', fontSize: '25.69px', fontFamily: 'Urbanist', fontWeight: '300', wordWrap: 'break-word' }}
              className="bg-transparent hover:bg-[#4CB5F0] text-[#F3FCF0] px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

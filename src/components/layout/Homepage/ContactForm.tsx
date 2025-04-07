"use client"

import { useState } from "react"
import { Urbanist } from "next/font/google"
import { Button } from "@/components/ui/button"
import BackgroundContact from "@/public/assets/images/background-contact.png"
import EmailIcon from "@/public/assets/svg/email.svg"
const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
import Image from "next/image"

interface ContactFormProps {
  hasBackground?: boolean
}

export default function ContactForm({ hasBackground = true }: ContactFormProps) {
  const [email, setEmail] = useState("")

  return (
    <div className={`relative rounded-3xl w-full h-[300px] ${hasBackground ? "bg-cover bg-center" : ""}`} 
    style={hasBackground ? {
        backgroundImage: `url(${BackgroundContact.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      } : {}}>
      <div className="absolute inset-0">
        <div className="max-w-screen-xl mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h2 className={`text-4xl ${hasBackground ? "text-white" : "text-gray-800"} mb-6 text-center w`} style={{ fontFamily: urbanist.style.fontFamily }}>
            Have an Awesome Project Idea? 
            <br /> 
            <span className="text-[#4CB5F0] font-bold">
              Let's Discuss
            </span>
          </h2>
          
          <div className={`w-full border-2 ${hasBackground ? 'border-white' : 'border-[#FFEAD5]'} rounded-full max-w-xl flex px-4 items-center`}>
            <Image src={EmailIcon} alt="Email" className={`${hasBackground ? 'bg-white' : 'bg-[#FFEAD5]'} rounded-full px-3 py-2 `} width={52} height={52} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Let’s collaborate to turn ideas into action – and impact that lasts."
              className={`flex-1 px-6 py-4 rounded-l-full ${hasBackground ? "text-white" : "text-black"} focus:outline-none`}
            />
            <Button className="px-5 py-5 rounded-full bg-[#7C9971] hover:bg-[#40c026] text-white font-medium flex justify-center items-center ml-12">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
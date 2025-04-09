import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Youtube, Instagram } from "lucide-react"
import Whatsapp from "@/public/assets/svg/whatsapp.svg"
import LinkedIn from "@/public/assets/images/linkedin1.png"
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 mt-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">DORIS DO</span>
            </div>

            <p className="text-gray-300 text-sm">
            Welcome to my world! Insights and inspiration from my journey in sustainability, storytelling, and global education.
            </p>

            <div className="flex gap-4">
              <Link href="https://www.facebook.com/share/17ewfK7TWD/?mibextid=wwXIfr" target="_blank" className="text-gray-300 hover:text-white">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" target="_blank" className="text-gray-300 hover:text-white">
                <Youtube size={18} />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="https://www.instagram.com/doris.trangdo?igsh=NTQ0dm94NHVnMWRt&utm_source=qr" target="_blank" className="text-gray-300 hover:text-white">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" target="_blank" className="text-gray-300 hover:text-white">
                <Image src={Whatsapp} alt="Whatsapp" className="text-white" width={22} height={22} />
                <span className="sr-only">Whatsapp</span>
              </Link>
              <Link href="https://www.linkedin.com/in/doristrangdo/" target="_blank" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Image src={LinkedIn} alt="LinkedIn" className="text-white" width={22} height={22} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-orange-500 font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">+84 399673001</li>
                <li className="text-gray-300 text-sm">doris.upgreen@gmail.com</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-orange-500 font-medium ">Contact with me</h3>
            <p className="text-gray-300 text-sm mb-4">Let's make a sustainable world.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white rounded-full px-3 py-2 text-black h-10" />
              <Button className="bg-orange-500 hover:bg-orange-600 h-10 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        </div>
      </div>
    </footer>
  )
}

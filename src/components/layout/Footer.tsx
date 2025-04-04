import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 mt-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="text-white font-bold">JC</span>
              </div>
              <span className="text-xl font-bold">JCREA</span>
            </div>

            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>

            <div className="flex gap-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube size={18} />
                <span className="sr-only">Youtube</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Navigation and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Navigation */}
            <div>
              <h3 className="text-orange-500 font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/service" className="text-gray-300 hover:text-white text-sm">
                    Service
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="text-gray-300 hover:text-white text-sm">
                    Resume
                  </Link>
                </li>
                <li>
                  <Link href="/project" className="text-gray-300 hover:text-white text-sm">
                    Project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-orange-500 font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 text-sm">+91 7738443636</li>
                <li className="text-gray-300 text-sm">Jayesh1636@gmail.com</li>
                <li className="text-gray-300 text-sm">Portfolio-jcrea.com</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-orange-500 font-medium mb-4">Get the latest information</h3>
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between text-xs text-gray-400">
          <div>Copyright© 2023 Jayesh. All Rights Reserved.</div>
          <div className="mt-2 md:mt-0">
            <Link href="/terms" className="hover:text-white">
              User Terms & Conditions
            </Link>
            {" | "}
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


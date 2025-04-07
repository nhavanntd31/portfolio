"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Urbanist } from 'next/font/google'
import { usePathname } from 'next/navigation'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 100) {
        const newOpacity = Math.max(1 - (currentScrollY - 100) / 300, 0.5)
        setOpacity(newOpacity)
      } else {
        setOpacity(1)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header className={`fixed top-5 left-0 right-0 w-full max-w-screen-xl mx-auto px-4 py-5 rounded-full bg-[#10110E] border border-blue-500 z-50 transition-opacity duration-300`} style={{ opacity }}>
      <nav className="flex items-center justify-between md:justify-center">
        <button className="md:hidden text-[#F3FCF0]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={24} />
        </button>

        <ul className="hidden md:flex items-center justify-between w-full px-4 space-x-8">
          <li>
            <Link href="/" className={`${pathname === '/' ? 'bg-[#329A1F]' : ''} text-[#F3FCF0] px-8 py-4 rounded-full font-medium hover:bg-[#329A1F] transition-all duration-500`} style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${pathname === '/about' ? 'bg-[#329A1F]' : ''} text-[#F3FCF0] px-8 py-4 rounded-full font-medium hover:bg-[#329A1F] transition-all duration-500`} style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/work" className={`${pathname === '/work' ? 'bg-[#329A1F]' : ''} text-[#F3FCF0] px-8 py-4 rounded-full font-medium hover:bg-[#329A1F] transition-all duration-500`} style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}>
              My Work
            </Link>
          </li>
          <li>
            <Link href="/blog" className={`${pathname === '/blog' ? 'bg-[#329A1F]' : ''} text-[#F3FCF0] px-8 py-4 rounded-full font-medium hover:bg-[#329A1F] transition-all duration-500`} style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`${pathname === '/social' ? 'bg-[#329A1F]' : ''} text-[#F3FCF0] px-8 py-4 rounded-full font-medium hover:bg-[#329A1F] transition-all duration-500`} style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}>
              Contact
            </Link>
          </li>
        </ul>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black border border-blue-500 rounded-lg p-4 md:hidden z-50">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className={`${pathname === '/' ? 'bg-[#329A1F]' : ''} text-[#F3FCF0] px-4 py-2 rounded-full block text-center font-medium hover:bg-[#40c026] transition-all duration-500`}
                  style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${pathname === '/about' ? 'bg-[#329A1F] px-4 py-2 rounded-full' : ''} text-[#F3FCF0] hover:text-[#329A1F] transition-all duration-500 block text-center`}
                  style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className={`${pathname === '/work' ? 'bg-[#329A1F] px-4 py-2 rounded-full' : ''} text-[#F3FCF0] hover:text-[#329A1F] transition-all duration-500 block text-center`}
                  style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`${pathname === '/blog' ? 'bg-[#329A1F] px-4 py-2 rounded-full' : ''} text-[#F3FCF0] hover:text-[#329A1F] transition-all duration-500 block text-center`}
                  style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${pathname === '/contact' ? 'bg-[#329A1F] px-4 py-2 rounded-full' : ''} text-[#F3FCF0] hover:text-[#329A1F] transition-all duration-500 block text-center`}
                  style={{ fontSize: '20px', fontFamily: urbanist.style.fontFamily }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

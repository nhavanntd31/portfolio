"use client"

import { useState } from "react"
import { Urbanist } from "next/font/google"
import Header from "@/components/layout/Header"
import Image from "next/image"
import ContactImage from "@/public/assets/images/Doris3.png"
import Variant from "@/public/assets/images/Variant2.png"
import Footer from "@/components/layout/Footer"
import { toast } from "sonner"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactName: "",
    phone: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.contactName.trim()) newErrors.contactName = "Contact name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    
    if (!formData.message.trim()) newErrors.message = "Message is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error("Please fill in all required fields")
      return
    }
    
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitSuccess(true)
        toast.success("Message sent successfully!")
        setFormData({
          name: "",
          address: "",
          contactName: "",
          phone: "",
          email: "",
          message: ""
        })
      } else {
        const error = await response.json()
        setSubmitError(error.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`${urbanist.className} flex flex-col min-h-screen bg-[#F3FCF0]`}>
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r rounded-2xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Image 
                      src={ContactImage}
                      alt="Contact Me"
     
                      className="relative z-10 rounded-xl"
                    />
                    <Image 
                      src={Variant}
                      alt="Variant"
                      className="absolute top-20 inset-0 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-4 text-[#344054]">Contact Me</h2>
              <p className="text-lg text-[#344054] mb-4">
                Got a creative idea for sustainability? Or simply want to chat about making a greener future?
                📩 Leave a message – Doris is here to connect, co-create, and GO GREEN with you!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#344054]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#329A1F] focus:border-[#329A1F]`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-[#344054]">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#329A1F] focus:border-[#329A1F]`}
                    placeholder="Your Address"
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-[#344054]">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.contactName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#329A1F] focus:border-[#329A1F]`}
                    placeholder="Contact Name"
                  />
                  {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#344054]">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#329A1F] focus:border-[#329A1F]`}
                    placeholder="Your Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#344054]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#329A1F] focus:border-[#329A1F]`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#344054]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#329A1F] focus:border-[#329A1F]`}
                    placeholder="Your Message"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#329A1F] text-white py-2 rounded-md hover:bg-[#40c026] transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                {submitSuccess && <p className="text-green-500">Message sent successfully!</p>}
                {submitError && <p className="text-red-500">{submitError}</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

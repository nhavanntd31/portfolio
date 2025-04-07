import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Upload } from "lucide-react"
import dynamic from "next/dynamic"
import { BlogPost } from "./BlogPostTable"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const RichTextEditor = dynamic(() => import('@/components/ui/editor'), { 
  ssr: false 
})

type RichTextEditorHandle = {
  getContent: () => string
  parseHTML: (content: string) => void
}

interface EditBlogFormProps {
  blog: BlogPost
  onClose: () => void
  onUpdateBlog: (id: string, blogData: any) => Promise<void>
}

export default function EditBlogForm({ blog, onClose, onUpdateBlog }: EditBlogFormProps) {
  const editorRef = useRef<RichTextEditorHandle>(null)
  const [title, setTitle] = useState(blog.title || "")
  const [category, setCategory] = useState(blog.category || "")
  const [type, setType] = useState(blog.type || "")
  const [author, setAuthor] = useState(blog.author || "")
  const [featuredImage, setFeaturedImage] = useState<string>(blog.imageUrl || "")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [imagePreview, setImagePreview] = useState<string>(blog.imageUrl || "")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const response = await fetch(`/api/blog/${blog._id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch blog content')
        }
        const result = await response.json()
        if (result.success && result.data) {
          setContent(result.data.content)
          if (editorRef.current) {
            editorRef.current.parseHTML(result.data.content)
          }
        }
      } catch (error) {
        console.error('Error fetching blog content:', error)
      }
    }

    fetchBlogContent()
  }, [blog._id])

  const handleGetContent = () => {
    if (editorRef.current) {
      return editorRef.current.getContent()
    }
    return ""
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      setErrorMessage("File size should not exceed 5MB")
      setIsErrorDialogOpen(true)
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result as string
      setFeaturedImage(base64String)
      setImagePreview(base64String)
    }
    reader.readAsDataURL(file)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const validateForm = () => {
    if (!title.trim()) {
      setErrorMessage("Blog title is required")
      setIsErrorDialogOpen(true)
      return false
    }

    if (!category.trim()) {
      setErrorMessage("Category is required")
      setIsErrorDialogOpen(true)
      return false
    }

    if (!author.trim()) {
      setErrorMessage("Author name is required")
      setIsErrorDialogOpen(true)
      return false
    }

    if (!featuredImage) {
      setErrorMessage("Featured image is required")
      setIsErrorDialogOpen(true)
      return false
    }

    const content = handleGetContent()
    if (!content.trim()) {
      setErrorMessage("Blog content cannot be empty")
      setIsErrorDialogOpen(true)
      return false
    }

    return true
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      const blogData = {
        id: blog._id,
        title,
        category,
        type,
        author,
        content: handleGetContent(),
        imageUrl: featuredImage
      }
      
      await onUpdateBlog(blog._id, blogData)
    } catch (error) {
      console.error('Error updating blog post:', error)
      setErrorMessage('Failed to update blog post. Please try again.')
      setIsErrorDialogOpen(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl mx-20 w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#344054]">Edit Blog Post</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full hover:bg-gray-100"
            onClick={onClose}
          >
            <X size={20} />
          </Button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-[#344054] font-medium mb-2">Blog Title</label>
              <input
                type="text"
                placeholder="Enter blog title"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#329A1F]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-[#344054] font-medium mb-2">Category</label>
              <input
                type="text"
                placeholder="Enter category"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#329A1F]"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-[#344054] font-medium mb-2">Type</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#329A1F]"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select type</option>
                <option value="blog">Blog</option>
                <option value="speaking">Speaking</option>
                <option value="social">Social</option>
                <option value="upgreen">Upgreen</option>
                <option value="education">Education</option>
                <option value="global">Global</option>
              </select>
            </div>
            <div>
              <label className="block text-[#344054] font-medium mb-2">Author</label>
              <input
                type="text"
                placeholder="Enter author name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#329A1F]"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[#344054] font-medium mb-2">Featured Image</label>
            <input 
              type="file" 
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div 
              onClick={triggerFileInput}
              className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                imagePreview ? 'border-[#329A1F] bg-green-50' : 'border-gray-300 hover:border-[#329A1F] hover:bg-gray-50'
              }`}
            >
              {imagePreview ? (
                <div className="w-full">
                  <div className="relative w-full h-48 mb-4">
                    <img 
                      src={imagePreview} 
                      alt="Featured image preview" 
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-center text-gray-500">Click to change image</p>
                </div>
              ) : (
                <>
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-sm font-medium text-gray-700">Click to upload image</p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                </>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-[#344054] font-medium mb-2">Content</label>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <RichTextEditor ref={editorRef} />
            </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-8">
            <Button 
              variant="outline" 
              className="rounded-full px-6 border-gray-200"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              className="bg-[#329A1F] hover:bg-[#3CAD29] text-white rounded-full px-6"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Blog"}
            </Button>
          </div>
        </div>
      </div>

      <AlertDialog open={isErrorDialogOpen} onOpenChange={setIsErrorDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Error</AlertDialogTitle>
            <AlertDialogDescription>
              {errorMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
} 
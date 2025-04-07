"use client"

import { useState, useEffect } from "react"
import { Urbanist } from "next/font/google"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, RefreshCcw, Search } from "lucide-react"
import BlogStatsCards from "./BlogStatsCards"
import { BlogPost } from "./BlogPostTable"
import BlogPostTable from "./BlogPostTable"
import CreateBlogForm from "./CreateBlogForm"
import EditBlogForm from "./EditBlogForm"
import { redirect } from "next/navigation"
import { toast, Toaster } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function AdminPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isCreatePopupOpen, setIsCreatePopupOpen] = useState(false)
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)
  const [postToEdit, setPostToEdit] = useState<BlogPost | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null)

  const fetchBlogPosts = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/blog')
      if (!response.ok) {
        throw new Error('Failed to fetch blog posts')
      }
      const result = await response.json()
      
      if (result.success && result.data) {
        const formattedPosts = result.data.map((post: any) => ({
          id: post._id,
          _id: post._id,
          title: post.title,
          category: post.category,
          type: post.type,
          author: post.author,
          date: new Date(post.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
          imageUrl: post.imageUrl
        }))
        setBlogPosts(formattedPosts)
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const handleViewPost = (post: BlogPost) => {
    window.open(`/blog/${post._id}`, '_blank')
  }

  const handleEditPost = (post: BlogPost) => {
    setPostToEdit(post)
    setIsEditPopupOpen(true)
  }

  const handleDeletePost = (post: BlogPost) => {
    setPostToDelete(post)
    setIsDeleteDialogOpen(true)
  }

  const confirmDelete = async () => {
    if (!postToDelete) return
    
    try {
      const response = await fetch(`/api/blog?id=${postToDelete._id}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) {
        throw new Error('Failed to delete blog post')
      }
      
      setBlogPosts(blogPosts.filter(p => p.id !== postToDelete.id))
      toast.success(`"${postToDelete.title}" has been successfully deleted.`)
    } catch (error) {
      console.error('Error deleting blog post:', error)
      toast.error("Failed to delete the blog post. Please try again.")
    } finally {
      setIsDeleteDialogOpen(false)
      setPostToDelete(null)
    }
  }

  const handleCreateBlog = async (blogData: any) => {
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to create blog post')
      }
      
      const result = await response.json()
      
      if (result.success && result.data) {
        const newPost: BlogPost = {
          id: result.data._id,
          _id: result.data._id,
          title: result.data.title,
          category: result.data.category,
          type: result.data.type,
          author: result.data.author,
          date: new Date(result.data.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
          imageUrl: result.data.imageUrl
        }
        
        setBlogPosts([...blogPosts, newPost])
        setIsCreatePopupOpen(false)
        toast.success(`"${newPost.title}" has been successfully created.`)
      }
    } catch (error) {
      console.error('Error creating blog post:', error)
      toast.error("Failed to create the blog post. Please try again.")
      throw error
    }
  }

  const handleUpdateBlog = async (id: string, blogData: any) => {
    try {
      const response = await fetch('/api/blog', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      })
      
      if (!response.ok) {
        throw new Error('Failed to update blog post')
      }
      
      const result = await response.json()
      
      if (result.success && result.data) {
        const updatedPost: BlogPost = {
          id: result.data._id,
          _id: result.data._id,
          title: result.data.title,
          category: result.data.category,
          type: result.data.type,
          author: result.data.author,
          date: new Date(result.data.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
          imageUrl: result.data.imageUrl
        }
        
        setBlogPosts(blogPosts.map(post => 
          post._id === updatedPost._id ? updatedPost : post
        ))
        
        setIsEditPopupOpen(false)
        setPostToEdit(null)
        toast.success(`"${updatedPost.title}" has been successfully updated.`)
      }
    } catch (error) {
      console.error('Error updating blog post:', error)
      toast.error("Failed to update the blog post. Please try again.")
      throw error
    }
  }

  const refreshPosts = () => {
    fetchBlogPosts()
  }

  return (
    <div className={`${urbanist.className} bg-[#F3FCF0] min-h-screen p-6 md:p-10`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-[#344054]">
            Blog <span className="text-[#329A1F]">Management</span>
          </h1>
          
          <Button 
            className="bg-[#7C9971] hover:bg-[#95B788] text-white rounded-full px-6 py-6 font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            onClick={() => setIsCreatePopupOpen(true)}
          >
            <Plus size={20} />
            Add New Blog
          </Button>
        </div>

        <BlogStatsCards 
          totalBlogs={blogPosts.length} 
          publishedBlogs={blogPosts.length}
          draftBlogs={0}
        />

        <Card className="bg-white shadow-md rounded-xl border-none mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle className="text-[#344054] text-xl">Blog Posts</CardTitle>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    className="pl-10 pr-4 py-2 rounded-full border border-gray-200 w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-[#329A1F]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
                <Button 
                  variant="outline" 
                  className="rounded-full p-2 border-gray-200"
                  onClick={refreshPosts}
                >
                  <RefreshCcw size={18} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">Loading blog posts...</div>
            ) : (
              <BlogPostTable 
                blogPosts={blogPosts.filter(post => 
                  post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  post.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  post.author.toLowerCase().includes(searchQuery.toLowerCase())
                )}
                onView={handleViewPost}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
              />
            )}
            
            <div className="flex justify-between items-center mt-6">
              <span className="text-sm text-gray-500">Showing 1-{blogPosts.length} of {blogPosts.length} items</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {isCreatePopupOpen && (
        <CreateBlogForm 
          onClose={() => setIsCreatePopupOpen(false)}
          onCreateBlog={handleCreateBlog}
        />
      )}

      {isEditPopupOpen && postToEdit && (
        <EditBlogForm 
          blog={postToEdit}
          onClose={() => {
            setIsEditPopupOpen(false)
            setPostToEdit(null)
          }}
          onUpdateBlog={handleUpdateBlog}
        />
      )}

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the blog post
              "{postToDelete?.title}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Toaster position="top-right" richColors />
    </div>
  )
}

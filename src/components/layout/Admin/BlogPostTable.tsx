import { Button } from "@/components/ui/button"
import { Edit, Eye, Trash2 } from "lucide-react"

export interface BlogPost {
  id: string
  _id: string
  title: string
  category: string
  type: string
  author: string
  date: string
  imageUrl?: string
}

export interface BlogPostTableProps {
  blogPosts: BlogPost[]
  onView: (post: BlogPost) => void
  onEdit: (post: BlogPost) => void
  onDelete: (post: BlogPost) => void
}

export default function BlogPostTable({ blogPosts, onView, onEdit, onDelete }: BlogPostTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-4 px-4 text-[#344054] font-medium">No</th>
            <th className="text-left py-4 px-4 text-[#344054] font-medium">Title</th>
            <th className="text-left py-4 px-4 text-[#344054] font-medium">Category</th>
            <th className="text-left py-4 px-4 text-[#344054] font-medium">Author</th>
            <th className="text-left py-4 px-4 text-[#344054] font-medium">Date</th>
            <th className="text-left py-4 px-4 text-[#344054] font-medium">Type</th>
            <th className="text-right py-4 px-4 text-[#344054] font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((post, index) => (
            <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-4 px-4 text-[#344054]">{index + 1}</td>
              <td className="py-4 px-4 text-[#344054] font-medium">{post.title}</td>
              <td className="py-4 px-4">
                <span className="px-3 py-1 rounded-full text-xs bg-[#F3FCF0] text-[#329A1F]">
                  {post.category}
                </span>
              </td>
              <td className="py-4 px-4 text-[#344054]">{post.author}</td>
              <td className="py-4 px-4 text-gray-500">{post.date}</td>
              <td className="py-4 px-4">
                <span className="px-3 py-1 rounded-full text-xs bg-[#F3FCF0] text-[#329A1F]">
                  {post.type.toUpperCase()}
                </span>
              </td>
              <td className="py-4 px-4">
                <div className="flex justify-end gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full text-[#344054] hover:text-[#329A1F] hover:bg-[#F3FCF0]"
                    onClick={() => onView(post)}
                  >
                    <Eye size={18} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full text-[#344054] hover:text-[#4CB5F0] hover:bg-[#F3FCF0]"
                    onClick={() => onEdit(post)}
                  >
                    <Edit size={18} />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="rounded-full text-[#344054] hover:text-red-500 hover:bg-red-50"
                    onClick={() => onDelete(post)}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 
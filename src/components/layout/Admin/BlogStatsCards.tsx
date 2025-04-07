import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface BlogStatsCardsProps {
  totalBlogs: number
  publishedBlogs: number
  draftBlogs: number
}

export default function BlogStatsCards({ totalBlogs, publishedBlogs, draftBlogs }: BlogStatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <Card className="bg-white shadow-md rounded-xl border-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-[#344054] text-xl">Total Blogs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-4xl font-bold text-[#329A1F]">{totalBlogs}</span>
            <div className="p-3 rounded-full bg-[#F3FCF0]">
              <ArrowRight className="text-[#329A1F]" size={24} />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-md rounded-xl border-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-[#344054] text-xl">Published</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-4xl font-bold text-[#4CB5F0]">
              {publishedBlogs}
            </span>
            <div className="p-3 rounded-full bg-[#F3FCF0]">
              <ArrowRight className="text-[#4CB5F0]" size={24} />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-white shadow-md rounded-xl border-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-[#344054] text-xl">Drafts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-4xl font-bold text-[#FD853A]">
              {draftBlogs}
            </span>
            <div className="p-3 rounded-full bg-[#F3FCF0]">
              <ArrowRight className="text-[#FD853A]" size={24} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 
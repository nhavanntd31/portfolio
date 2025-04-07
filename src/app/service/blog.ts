import mongoose from 'mongoose';
export const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  type: { type: String, required: true },
  imageUrl: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

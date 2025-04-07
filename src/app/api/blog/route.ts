import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/mongodb';
import { Blog } from '@/app/service/blog';
import { BlogType } from '@/app/service/blog';

export async function GET(request: NextRequest) {
  await dbConnect();
  console.log("Connected to MongoDB");
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const type = searchParams.get('type');
  const category = searchParams.get('category');
  const sortBy = searchParams.get('sortBy') || 'date';
  const sortOrder = searchParams.get('sortOrder') || 'desc';
  
  const skip = (page - 1) * limit;
  
  const query: any = {};
  
  if (type) {
    query.type = type;
  }
  
  if (category) {
    query.category = category;
  }
  
  const sortOptions: any = {};
  sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;
  
  try {
    const totalDocs = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .skip(skip)
      .limit(limit)
      .sort(sortOptions);
    
    return NextResponse.json({ 
      success: true, 
      data: blogs,
      pagination: {
        total: totalDocs,
        page,
        limit,
        pages: Math.ceil(totalDocs / limit)
      }
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  await dbConnect();
  console.log("Connected to MongoDB");
  try {
    const body = await request.json();
    const { title, category, author, type, imageUrl, content } = body;
    
    if (!title || !category || !author || !imageUrl || !content) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' }, 
        { status: 400 }
      );
    }
    
    const blog = await Blog.create({
      title,
      category,
      author,
      type,
      imageUrl,
      content,
    });
    
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  await dbConnect();
  
  try {
    const body = await request.json();
    const { id, title, category, author, type, imageUrl, content } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Blog ID is required' }, 
        { status: 400 }
      );
    }
    
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, category, author, type, imageUrl, content },
      { new: true, runValidators: true }
    );
    
    if (!updatedBlog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: updatedBlog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  await dbConnect();
  
  try {
    const id = request.nextUrl.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Blog ID is required' }, 
        { status: 400 }
      );
    }
    
    const deletedBlog = await Blog.findByIdAndDelete(id);
    
    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: {} }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
} 
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import { User } from '@/app/service/user';
import { sign } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  await dbConnect();
  
  try {
    const { username, password } = await request.json();

    const user = await User.findOne({ username });
    
    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const token = sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    const response = NextResponse.json(
      { success: true, token },
      { status: 200 }
    );

    response.cookies.set('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400 // 1 day
    });

    return response;

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error during login' },
      { status: 500 }
    );
  }
} 
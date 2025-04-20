import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("carrefour");

    // Extract the id from params and construct the href
   

    // Search for document with matching href
    const data = await db.collection("admins").find({}).toArray();
    
    if (data.length === 0) {
      return NextResponse.json({ error: 'Users not found' }, { status: 404 });
    }

    // Transform the data to match the expected format
    const transformedData = data.map(item => ({
     username: item.user,
     password: item.password,
     ip: item.ip,
     
    }));

    // Return first matching product since href should be unique
    return NextResponse.json(transformedData[0]);

  } catch (e) {
    console.error('MongoDB Error:', e);
    return NextResponse.json({ 
      error: 'Failed to fetch product',
      details: e.message
    }, { status: 500 });
  }
}
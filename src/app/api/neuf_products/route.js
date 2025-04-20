import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("carrefour");

    // Fetch all documents from the neuf collection
    const data = await db.collection("neuf").find({}).toArray();
    
    // Transform the data to match the expected format in the navigation component
    const transformedData = data.map(item => ({
      title: item.title,
      href: item.href,
      image: item.image,
      categorie: item.category || item.categorie // Handle both field names
    }));

    return NextResponse.json(transformedData);
  } catch (e) {
    console.error('MongoDB Error:', e);
    return NextResponse.json({ 
      error: 'Failed to fetch neuf products',
      details: e.message
    }, { status: 500 });
  }
} 
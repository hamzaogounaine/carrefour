import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';

export async function GET(request, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db("carrefour");

    // Extract the id from params and construct the href
    const href = `/neuf/${params.id}`;

    // Search for document with matching href
    const data = await db.collection("neuf").find({ href: href }).toArray();
    
    if (data.length === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // Transform the data to match the expected format
    const transformedData = data.map(item => ({
      title: item.title,
      href: item.href,
      image: item.image,
      categorie: item.category || item.categorie, // Handle both field names
      fiche_technique: item.fiche_technique
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
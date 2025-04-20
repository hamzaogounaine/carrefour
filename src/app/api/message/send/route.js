import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongo';

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Validate required fields
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("carrefour");

        // Create message document
        const messageDoc = {
            name,
            email,
            phone,
            content: message,
            createdAt: new Date(),
            read: false
        };

        // Insert into messages collection
        await db.collection("messages").insertOne(messageDoc);

        return NextResponse.json(
            { message: "Message sent successfully" },
            { status: 201 }
        );

    } catch (e) {
        console.error('MongoDB Error:', e);
        return NextResponse.json({ 
            error: "Failed to send message",
            details: e.message
        }, { status: 500 });
    }
}

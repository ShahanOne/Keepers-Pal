import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/db';
import { createNote } from '@/lib/functions/note';
let isConnected = false;
if (!isConnected) {
  connectDB();
  isConnected = true;
}

export async function POST(req) {
  const { title, tagline, body, uploadedBy } = await req.json();

  try {
    const newNote = await createNote(title, tagline, body, uploadedBy);
    return NextResponse.json(newNote);
  } catch (err) {
    return NextResponse.json(
      { error: 'An error occurred while creating note' },
      { status: 500 }
    );
  }
}

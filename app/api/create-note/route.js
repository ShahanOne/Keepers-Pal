import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/db';
import { createNote } from '@/lib/functions/note';
let isConnected = false;
if (!isConnected) {
  connectDB();
  isConnected = true;
}

export async function POST(req) {
  const reqBody = await req.json();
  const { title, tagline, body, uploadedBy, pinned } = reqBody[0];

  try {
    const newNote = await createNote(title, tagline, body, uploadedBy, pinned);
    return NextResponse.json(newNote);
  } catch (err) {
    return NextResponse.json(
      { error: 'An error occurred while creating note' },
      { status: 500 }
    );
  }
}

import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/db';
import { pinNote } from '@/lib/functions/note';
let isConnected = false;
if (!isConnected) {
  connectDB();
  isConnected = true;
}

export async function POST(req) {
  const body = await req.json();
  const { noteId } = body[0];

  try {
    const pinnedNote = await pinNote(noteId);
    return NextResponse.json(pinnedNote);
  } catch (err) {
    return NextResponse.json(
      { error: 'An error occurred while pinning note' },
      { status: 500 }
    );
  }
}

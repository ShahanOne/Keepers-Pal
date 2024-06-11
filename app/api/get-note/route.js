import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/db';
import { getNoteWithId } from '@/lib/functions/note';
let isConnected = false;
if (!isConnected) {
  connectDB();
  isConnected = true;
}

export async function POST(req) {
  const { noteId } = await req.json();

  try {
    const foundNote = await getNoteWithId(noteId);
    return NextResponse.json(foundNote);
  } catch (err) {
    return NextResponse.json(
      { error: 'An error occurred while fetching note' },
      { status: 500 }
    );
  }
}

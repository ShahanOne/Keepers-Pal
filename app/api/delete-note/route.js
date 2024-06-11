import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/db';
import { deleteNote } from '@/lib/functions/note';
let isConnected = false;
if (!isConnected) {
  connectDB();
  isConnected = true;
}

export async function POST(req) {
  const { noteId } = await req.json();

  try {
    const deletedNote = await deleteNote(noteId);
    return NextResponse.json(deletedNote);
  } catch (err) {
    return NextResponse.json(
      { error: 'An error occurred while deleting note' },
      { status: 500 }
    );
  }
}

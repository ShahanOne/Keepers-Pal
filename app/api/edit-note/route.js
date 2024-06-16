import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/db';
import { getNoteWithId, updateNote } from '@/lib/functions/note';

let isConnected = false;
if (!isConnected) {
  connectDB();
  isConnected = true;
}

export async function POST(req) {
  try {
    const { noteId, newTitle, newTagline, newBody } = await req.json();

    const note = await getNoteWithId(noteId);

    if (note) {
      const newNote = {
        title: newTitle,
        tagline: newTagline,
        body: newBody,
      };

      const updatedNote = await updateNote(noteId, newNote);
      return NextResponse.json(updatedNote);
    } else {
      return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
    }
  } catch (err) {
    console.error('Error updating note:', err);
    return NextResponse.json(
      { error: 'An error occurred while updating note' },
      { status: 500 }
    );
  }
}

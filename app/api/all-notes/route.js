import { NextResponse } from 'next/server';
import { connectDB } from '../../../utils/db';
import { getAllNotes } from '@/lib/functions/note';

let isConnected = false;
if (!isConnected) {
  connectDB();
  isConnected = true;
}

export async function GET() {
  try {
    const foundNotes = await getAllNotes();
    const response = NextResponse.json(foundNotes);
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    return response;
  } catch (err) {
    return NextResponse.json(
      { error: 'An error occurred while fetching Notes' },
      { status: 500 }
    );
  }
}

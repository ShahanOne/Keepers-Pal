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
    return NextResponse.json(foundNotes);
  } catch (err) {
    return NextResponse.json(
      { error: 'An error occurred while fetching Notes' },
      { status: 500 }
    );
  }
}

import NoteModel from '../models/note.js';

// Create a new note
const createNote = async (noteData) => {
  const note = new NoteModel({
    title: noteData.title,
    tagline: noteData.tagline,
    body: noteData.body,
    uploadedBy: noteData.uploadedBy,
  });

  try {
    const savedNote = await note.save();
    return savedNote;
  } catch (error) {
    return error;
  }
};

// Retrieve all notes
async function getAllNotes() {
  try {
    const allNotes = await NoteModel.find();
    return allNotes;
  } catch (error) {
    throw error;
  }
}

// Update a note
async function updateNote(id, update) {
  try {
    const updatedNote = await NoteModel.findByIdAndUpdate(id, update, {
      new: true,
    });
    return updatedNote;
  } catch (error) {
    throw error;
  }
}
// get a Note
async function getNoteWithId(id) {
  try {
    const note = await NoteModel.findById(id);
    return note;
  } catch (error) {
    throw error;
  }
}

// Delete a Note
async function deleteNote(id) {
  try {
    const deletedNote = await NoteModel.findByIdAndDelete(id);
    return deletedNote;
  } catch (error) {
    throw error;
  }
}

export { getAllNotes, getNoteWithId, createNote, updateNote, deleteNote };

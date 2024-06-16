import Note from '../models/note.js';

// Create a new note
const createNote = async (title, tagline, body, uploadedBy, pinned) => {
  const note = new Note({
    title,
    tagline,
    body,
    uploadedBy,
    pinned,
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
    const allNotes = await Note.find();
    return allNotes;
  } catch (error) {
    throw error;
  }
}

// Update a note
async function updateNote(id, update) {
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, update, {
      new: true,
    });
    return updatedNote;
  } catch (error) {
    throw error;
  }
}
// Pin a note
async function pinNote(id) {
  try {
    const note = await Note.findById(id);
    if (!note) {
      throw new Error('Note not found');
    }

    const pinnedNote = await Note.findByIdAndUpdate(
      id,
      { pinned: !note.pinned },
      { new: true }
    );
    return pinnedNote;
  } catch (error) {
    throw error;
  }
}

// get a Note
async function getNoteWithId(id) {
  try {
    const note = await Note.findById(id);
    return note;
  } catch (error) {
    throw error;
  }
}

// Delete a Note
async function deleteNote(id) {
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    return deletedNote;
  } catch (error) {
    throw error;
  }
}

export {
  getAllNotes,
  getNoteWithId,
  createNote,
  updateNote,
  deleteNote,
  pinNote,
};

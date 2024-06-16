import mongoose from 'mongoose';
export const noteSchema = new mongoose.Schema({
  title: String,
  tagline: String,
  body: String,
  uploadedBy: String,
  pinned: Boolean,
});

let Note;
try {
  // Check if the model already exists
  Note = mongoose.model('Note');
} catch (error) {
  // If not, define the model
  Note = mongoose.model('Note', noteSchema);
}

export default Note;

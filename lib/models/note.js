import mongoose from 'mongoose';
const noteSchema = new mongoose.Schema({
  title: String,
  tagline: String,
  body: String,
  uploadedBy: String,
  pinned: Boolean,
});

export default mongoose.models.Note || mongoose.model('Note', noteSchema);

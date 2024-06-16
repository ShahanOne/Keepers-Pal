'use client';
import EditNoteForm from '@/components/EditNoteForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import NoteCard from '@/components/NoteCard';
import Pagination from '@/components/Pagination';
import { Modal } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [allNotes, setAllNotes] = useState([]);
  const [isNoteActive, setNoteActive] = useState(false);
  const [note, setNote] = useState({});
  const [theme, setTheme] = useState('Light');
  const [editNote, setEditNote] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 6;

  useEffect(() => {
    const fetchAllNotes = async () => {
      try {
        const res = await axios.get('/api/all-notes');
        setAllNotes(res.data);
      } catch (err) {
        toast.error('Failed to fetch notes.');
      }
    };
    fetchAllNotes();
  }, []);

  const addNote = async () => {
    const { title, tagline, body, uploadedBy } = note;
    try {
      const res = await axios.post('/api/create-note', {
        title,
        tagline,
        body,
        uploadedBy,
        pinned: false,
      });
      if (res.data) {
        setNote({});
        toast.success('Note added successfully!');
        setAllNotes([...allNotes, res.data]); // Add the new note to the list
      }
    } catch (err) {
      toast.error('Failed to add note.');
    }
  };

  const handleEditNote = async (id) => {
    setEditNote(true);
    try {
      const res = await axios.post('/api/get-note', { noteId: id });
      if (res.data) {
        setNoteToEdit(res.data);
      }
    } catch (err) {
      toast.error('Failed to fetch note for editing.');
    }
  };

  const editThisNote = async (title, tagline, body) => {
    try {
      const res = await axios.post('/api/edit-note', {
        noteId: noteToEdit?._id,
        newTitle: title,
        newTagline: tagline,
        newBody: body,
      });
      if (res.data.title) {
        setNoteToEdit(null);
        setEditNote(false);
        toast.success('Note updated successfully!');
        setAllNotes(
          allNotes.map((note) => (note._id === res.data._id ? res.data : note))
        );
      }
    } catch (err) {
      toast.error('Failed to update note.');
    }
  };

  const pinNote = async (id) => {
    try {
      const res = await axios.post('/api/pin-note', { noteId: id });
      if (res.data) {
        toast.success('Note pinned successfully!');
        setAllNotes(
          allNotes.map((note) =>
            note._id === res.data._id ? { ...note, pinned: !note.pinned } : note
          )
        );
      }
    } catch (err) {
      toast.error('Failed to pin note.');
    }
  };

  const totalPages = Math.ceil(allNotes.length / notesPerPage);
  const sortedNotes = [...allNotes].sort((a, b) => b.pinned - a.pinned);
  const displayedNotes = sortedNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`${theme === 'Light' ? 'bg-slate-100' : 'bg-gray-800'}`}>
      <Navbar
        mode={theme}
        changeTheme={() =>
          theme === 'Light' ? setTheme('Dark') : setTheme('Light')
        }
      />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center w-[50%] p-6 pb-24">
          {!isNoteActive ? (
            <div
              onClick={() => setNoteActive(true)}
              className={`${
                theme === 'Light'
                  ? 'bg-slate-200 text-gray-500'
                  : 'bg-gray-500 text-gray-200'
              } flex flex-col p-4 rounded-lg`}
            >
              <p className="text-slate-400">Type Something...</p>
            </div>
          ) : (
            <div
              className={`${
                theme === 'Light'
                  ? 'bg-slate-200 text-gray-500'
                  : 'bg-gray-500 text-gray-200'
              } flex flex-col p-4 rounded-lg`}
            >
              <input
                value={note.title || ''}
                onChange={(e) =>
                  setNote((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="title"
                className={`${
                  theme === 'Light'
                    ? 'bg-slate-200 text-gray-500'
                    : 'bg-gray-500 text-gray-200'
                } outline-none p-2 text-lg`}
              />
              <input
                value={note.tagline || ''}
                onChange={(e) =>
                  setNote((prev) => ({ ...prev, tagline: e.target.value }))
                }
                placeholder="tagline"
                className={`${
                  theme === 'Light'
                    ? 'bg-slate-200 text-gray-500'
                    : 'bg-gray-500 text-gray-200'
                } outline-none p-2 text-sm`}
              />
              <input
                value={note.uploadedBy || ''}
                onChange={(e) =>
                  setNote((prev) => ({ ...prev, uploadedBy: e.target.value }))
                }
                placeholder="your name"
                className={`${
                  theme === 'Light'
                    ? 'bg-slate-200 text-gray-500'
                    : 'bg-gray-500 text-gray-200'
                } outline-none p-2 text-sm`}
              />
              <textarea
                placeholder="note.."
                value={note.body || ''}
                rows={2}
                onChange={(e) =>
                  setNote((prev) => ({ ...prev, body: e.target.value }))
                }
                className={`${
                  theme === 'Light'
                    ? 'bg-slate-200 text-gray-500'
                    : 'bg-gray-500 text-gray-200'
                } outline-none p-2 resize-none`}
              />{' '}
            </div>
          )}
          <div className="flex justify-end py-2">
            <button
              onClick={() =>
                note.title?.length > 0 && note.body?.length > 0
                  ? addNote()
                  : toast.error('Title and body are required.')
              }
              className="bg-violet-400 hover:bg-violet-500 text-white p-2 rounded-lg shadow-lg"
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
      <div className="px-4">
        <p
          className={`${theme === 'Light' ? 'text-gray-800' : 'text-gray-200'}`}
        >
          Added Notes:{' '}
        </p>
        <div className="grid grid-cols-4 gap-4 pt-6 pb-12">
          {displayedNotes.length > 0 &&
            displayedNotes.map((note, index) => (
              <NoteCard
                key={index}
                editNote={() => handleEditNote(note._id)}
                pinNote={() => pinNote(note._id)}
                theme={theme}
                title={note.title}
                tagline={note.tagline}
                uploader={note.uploadedBy}
                body={note.body}
                pinned={note.pinned}
              />
            ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Modal
        centered
        title={
          <div style={{ textAlign: 'center', fontWeight: '400' }}>
            Edit Note
          </div>
        }
        open={editNote}
        onCancel={() => {
          setEditNote(false);
          setNoteToEdit(null);
          setNote({});
        }}
        footer={[]}
      >
        <EditNoteForm
          previousNote={noteToEdit}
          theme={theme}
          editThisNote={editThisNote}
        />
      </Modal>
      <Footer />
      <ToastContainer />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditNoteForm = ({ editThisNote, previousNote, theme }) => {
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (previousNote) {
      setTitle(previousNote.title);
      setTagline(previousNote.tagline);
      setBody(previousNote.body);
    }
  }, [previousNote]);

  const handleSubmit = () => {
    if (title.length > 0 && body.length > 0) {
      editThisNote(title, tagline, body);
      toast.success('Note updated successfully!');
    } else {
      toast.error('Title and body are required.');
    }
  };

  return (
    <div
      className={`${
        theme === 'Light'
          ? 'bg-slate-200 text-gray-500'
          : 'bg-gray-500 text-gray-200'
      } flex flex-col p-4 rounded-lg`}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        className={`${
          theme === 'Light'
            ? 'bg-slate-200 text-gray-500'
            : 'bg-gray-500 text-gray-200'
        } outline-none p-2 text-lg`}
      />
      <input
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
        placeholder="tagline"
        className={`${
          theme === 'Light'
            ? 'bg-slate-200 text-gray-500'
            : 'bg-gray-500 text-gray-200'
        } outline-none p-2 text-sm`}
      />
      <textarea
        placeholder="note.."
        value={body}
        rows={2}
        onChange={(e) => setBody(e.target.value)}
        className={`${
          theme === 'Light'
            ? 'bg-slate-200 text-gray-500'
            : 'bg-gray-500 text-gray-200'
        } outline-none p-2 resize-none`}
      />
      <div className="flex justify-end py-2">
        <button
          onClick={handleSubmit}
          className="bg-violet-400 hover:bg-violet-500 text-white p-2 rounded-lg shadow-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default EditNoteForm;

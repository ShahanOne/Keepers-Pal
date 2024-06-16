import React from 'react';

const NoteCard = ({
  theme,
  title,
  tagline,
  uploader,
  body,
  editNote,
  pinNote,
  pinned,
}) => {
  return (
    <div
      className={`${
        theme === 'Light' ? 'bg-slate-200' : 'bg-gray-500'
      } p-4 rounded-lg shadow-lg cursor-pointer flex flex-col justify-between`}
      onClick={editNote}
    >
      <div>
        <h3 className="text-xl font-bold text-pink-700">{title}</h3>
        <p className="text-sm text-emerald-500">{tagline}</p>
        <p className="text-sm">{body}</p>
        <p className="text-xs text-indigo-400">By: {uploader}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={pinNote}
          className={`${
            pinned ? 'bg-yellow-400' : 'bg-purple-400'
          } hover:bg-yellow-500 text-white px-2 rounded-lg shadow-lg`}
        >
          {pinned ? 'Unpin' : 'Pin'}
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

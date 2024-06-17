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
      } p-4 rounded-lg shadow-lg flex flex-col justify-between`}
    >
      <div onClick={editNote} className="cursor-pointer">
        <h3
          className={`text-xl font-bold ${
            theme === 'Light' ? 'text-gray-700' : 'text-gray-100'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm ${
            theme === 'Light' ? 'text-gray-500' : 'text-gray-300'
          }`}
        >
          {tagline}
        </p>
        <p
          className={`text-sm ${
            theme === 'Light' ? 'text-gray-800' : 'text-gray-100'
          }`}
        >
          {body}
        </p>
        <p
          className={`text-xs ${
            theme === 'Light' ? 'text-gray-400' : 'text-gray-300'
          }`}
        >
          By: {uploader}
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            pinNote();
          }}
          className={`${
            pinned ? 'bg-orange-500' : 'bg-red-400'
          } hover:bg-orange-500 text-white px-2 rounded-lg shadow-lg`}
        >
          {pinned ? 'Unpin' : 'Pin'}
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

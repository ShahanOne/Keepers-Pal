import React from 'react';

const NoteCard = ({ title, tagline, body, uploader }) => {
  return (
    <div className="card shadow-lg rounded-lg p-4">
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm">{tagline}</p>
      <p className="text-base my-2 px-2">{body}</p>
      <p className="text-md font-bold text-end">{uploader}</p>
    </div>
  );
};

export default NoteCard;

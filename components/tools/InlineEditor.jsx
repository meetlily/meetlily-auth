import React, { useState } from 'react';

const InlineEditor = () => {
  const [content, setContent] = useState('Initial content');

  const handleContentChange = (event) => {
    setContent(event.target.textContent);
  };

  return (
    <div contentEditable={true} onInput={handleContentChange}>
      {content}
    </div>
  );
};

export default InlineEditor;
import React, { useState } from 'react';

const DocumentForm = ({ onAddDocument }) => {
  const [name, setName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDocument({ name, expiryDate });
    setName('');
    setExpiryDate('');
  };

  return (
    <div className="document-form">
      <h2>Add Document</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Document Name (e.g., Passport)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="date"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <button type="submit">Add Document</button>
      </form>
    </div>
  );
};

export default DocumentForm;

import React from 'react';

const DocumentList = ({ documents, onRemove }) => {
  return (
    <div className="document-list">
      <h2>Tracked Documents</h2>
      {documents.length === 0 ? (
        <p>No documents are being tracked.</p>
      ) : (
        <ul>
          {documents.map((document, index) => (
            <li key={index}>
              <strong>Document:</strong> {document.name} <br />
              <strong>Expiration Date:</strong> {document.expiryDate} <br />
              <button onClick={() => onRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DocumentList;

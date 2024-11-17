import React, { useState, useEffect } from 'react';
import DocumentForm from './components/DocumentForm';
import DocumentList from './components/DocumentList';
import ExpirationReport from './components/ExpirationReport';

const App = () => {
  const [documents, setDocuments] = useState([]);

  // Load documents from LocalStorage
  useEffect(() => {
    const savedDocuments = JSON.parse(localStorage.getItem('documents')) || [];
    setDocuments(savedDocuments);
  }, []);

  // Save documents to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  const addDocument = (document) => {
    setDocuments([...documents, document]);
  };

  const handleRemoveDocument = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  return (
    <div className="app">
      <h1>Document Expiration Reminder</h1>
      <DocumentForm onAddDocument={addDocument} />
      <DocumentList documents={documents} onRemove={handleRemoveDocument} />
      <ExpirationReport documents={documents} />
    </div>
  );
};

export default App;

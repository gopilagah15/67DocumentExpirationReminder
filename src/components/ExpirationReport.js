import React from 'react';

const ExpirationReport = ({ documents }) => {
  const today = new Date();
  const oneMonthFromNow = new Date();
  oneMonthFromNow.setMonth(today.getMonth() + 1);

  const expiringSoon = documents.filter((doc) => {
    const expiryDate = new Date(doc.expiryDate);
    return expiryDate <= oneMonthFromNow && expiryDate >= today;
  });

  return (
    <div className="expiration-report">
      <h2>Expiration Report</h2>
      {expiringSoon.length === 0 ? (
        <p>No documents expiring within the next month.</p>
      ) : (
        <ul>
          {expiringSoon.map((doc, index) => (
            <li key={index}>
              <strong>{doc.name}</strong> expires on {doc.expiryDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpirationReport;

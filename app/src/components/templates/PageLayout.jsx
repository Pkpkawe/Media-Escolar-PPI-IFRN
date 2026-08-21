import React from 'react';

function PageLayout({ children }) {
  return (
    <main className="min-h-screen flex justify-center items-center bg-[#eef2f5] p-5">
      {children}
    </main>
  );
}

export default PageLayout;
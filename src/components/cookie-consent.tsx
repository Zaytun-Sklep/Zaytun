'use client';

import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 text-white p-4 z-50 flex flex-col sm:flex-row justify-between items-center gap-4 backdrop-blur">
      <p className="text-sm text-center sm:text-left">
        We use cookies to ensure you get the best experience on our website. 
        By continuing to use this site, you agree to our use of cookies.
      </p>
      <button 
        onClick={accept} 
        className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap"
      >
        Accept
      </button>
    </div>
  );
}

"use client";
import { useEffect } from 'react';

export default function RedirectPage() {

  useEffect(() => {
    window.location.href = 'http://127.0.0.1:5500/';
  }, []);

  return (
    <div>
      <p>Redirecting to the Simple AI Chatbot...</p>
    </div>
  );
}

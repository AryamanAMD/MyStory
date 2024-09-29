"use client";
import { useEffect } from 'react';

export default function RedirectPage() {

  useEffect(() => {
    // Redirect to the specified URL
    window.location.href = 'https://replit.com/@daniyasa/Simple-AI-Chatbot';
  }, []);

  return (
    <div>
      <p>Redirecting to the Simple AI Chatbot...</p>
    </div>
  );
}

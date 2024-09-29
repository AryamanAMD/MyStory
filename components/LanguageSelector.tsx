// D:\PROJECTS\portfolio\components\LanguageSelector.tsx
import React from 'react';

// Define the allowed languages as a union of string literals
type Language = 'en' | 'es';

interface LanguageSelectorProps {
  onLanguageChange: (lang: Language) => void; // Update the prop type to use the union type
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(event.target.value as Language); // Assert the value as Language
  };

  return (
    <select onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
      {/* Add more language options as needed */}
    </select>
  );
};

export default LanguageSelector;

"use client";
import React, { useState, useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const DarkMode = ({ onChange = () => { } }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const initialMode = document.body.classList.contains('dark-mode') || true;
    setIsDarkMode(initialMode);
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    onChange(newMode);
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        style={{color: 'white' }}
      >
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </div>
  );
};

export default DarkMode;















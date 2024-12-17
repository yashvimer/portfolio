import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const Tabbutton = ({ active, selectTab, children, isDarkMode }) => {
  const activeColor = isDarkMode ? 'text-white' : 'text-black';
  const inactiveColor = isDarkMode ? 'text-gray-400' : 'text-gray-700';

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold  ${
          active ? activeColor : inactiveColor
        }`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className={`h-1 mt-2 mr-3 ${
          active ? 'bg-pink-500' : 'bg-gray-500'
        }`}
      ></motion.div>
    </button>
  );
};

export default Tabbutton;


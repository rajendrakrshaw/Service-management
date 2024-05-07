// Menu.js
import React from 'react';
import styles from './Menu.module.css';

const Menu = ({ options, onClose }) => {
  return (
    <div className={styles.menu}>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={option.onClick}>{option.label}</button>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Menu;

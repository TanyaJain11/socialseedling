import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from '../styles/ThemeToggle.module.css';
import { Tooltip } from 'react-tooltip';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={styles.container}>
      <div className={styles.tooltip}>
        <span data-tip={darkMode ? 'Light Mode' : 'Dark Mode'} data-for="themeToggleTooltip">
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </span>
        <Tooltip id="themeToggleTooltip" place="left" effect="solid" />
      </div>
      <button className={`${styles.toggle} ${darkMode ? styles.dark : styles.light}`} onClick={handleToggle} />
    </div>
  );
};

export default ThemeToggle;

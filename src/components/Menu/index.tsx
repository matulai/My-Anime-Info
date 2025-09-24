import { useState } from 'react';
import ChevronIcon from '@/components/Icons/ChevronIcon';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="menu-button-line" />
        <span className="menu-button-line" />
        <span className="menu-button-line" />
      </button>
      <div className={`menu-drop-down ${isOpen ? 'open' : 'close'}`}>
        <div className="menu-drop-down-header">
          <Title />
          <button
            className="menu-button-icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronIcon />
          </button>
        </div>
        <Navbar />
      </div>
      {isOpen && (
        <button
          className="menu-block-background"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Menu;

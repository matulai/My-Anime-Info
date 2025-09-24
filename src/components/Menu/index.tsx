import { useState } from 'react';
import Navbar from '@/components/Navbar';
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
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {'<'}
        </button>
        <Navbar />
        {isOpen && (
          <button
            className="menu-block-background"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Menu;

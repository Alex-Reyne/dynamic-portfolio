import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        {/* <h1>Alex Reyne</h1> */}
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'clients', 'contact'].map((item, index) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <sup>0{index + 1}</sup>
            <a
              href={`#${item}`}
              className="btn-flip"
              data-back={item}
              data-front={item}
              // onMouseEnter={play}
            ></a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'clients', 'contact'].map((item, index) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    <sup>0{index + 1}</sup>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const scrollToSection = () => {
    scroller.scrollTo('skills', null);
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            className="badge-cmp app__flex"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <a href="https://github.com/alex-reyne" target="_blank">
              <span></span>
            </a>
            <span>🧑🏻‍🚀</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Alex Reyne</h1>
            </div>
          </motion.div>
          <motion.div
            className="tag-cmp app__flex"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
          >
            <p className="p-text">Web Developer</p>
            <p className="p-text">Graphic Designer</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.logo} alt="profile_bg" />
        {/* <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
        ></motion.div> */}
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.sass].map((circle, index) => (
          <motion.div
            className="circle-cmp app__flex"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: 'tween' }}
            onClick={(e) => scrollToSection()}
            key={`circle-${index}`}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');

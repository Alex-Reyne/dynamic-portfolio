import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import { motion } from 'framer-motion';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Get in touch with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:creativereyne@gmail.com" className="p-text">
            creativereyne@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (306) 821 3553" className="p-text">
            +1 (306) 821 3553
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            ></input>
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            ></input>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');

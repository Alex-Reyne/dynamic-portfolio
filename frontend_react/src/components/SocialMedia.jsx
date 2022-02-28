import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/alex-reyne" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://linkedin.com/in/alexanderreyne" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://linktr.ee/alexreyne" target="_blank">
        <div>
          <SiLinktree />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;

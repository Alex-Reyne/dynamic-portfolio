import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skills', 'clients', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#fec859' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;

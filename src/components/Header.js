import React from 'react';
import PropTypes from 'prop-types';
import './header.css'

const Header = ({ length }) => (
  <div className='header-cont'>
    <div className='title-cont'>
      <h1>Football360</h1>
    </div>
    <div className='num-cont'>
      <p>
        Total Leagues: 
        {' '}
        {(length)}
      </p>
    </div>
  </div>
);

Header.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Header;
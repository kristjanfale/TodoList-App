import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      {/* "Link" is like "a" tag in HTML, "to" is like "href" in HTML */}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  backgroundColor: '#fff',
  border: '2px solid #000',
  borderRadius: '13px',
  padding: '10px',
  marginBottom: '10px',
  color: '#00e600'
}

export default Header;

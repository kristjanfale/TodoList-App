import React, { Component } from 'react';

function About() {
  return (
    <React.Fragment>
      <div style={styleAbout}>
        <h1>About</h1>
        <p>This is <b>TodoList</b> app, my first app made with React :)</p>
      </div>
    </React.Fragment>
  )
}

const styleAbout = {
  textAlign: 'center',
  border: '1px #000 solid',
  borderRadius: '5px',
  background: '#fff',
  padding: '10px'
}

export default About;

import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Technologies Used:</p>
        <ul>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>Redux</li>
          <li>Material UI</li>
          <li>Postico</li>
          <li>PostgreSQL</li>
          <li>Axios</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div>
        <h4>Special Thanks to my partner Vinothini for always believing in me and my brother Dillon for all his support through Prime.</h4>
      </div>
    </div>
  );
}

export default AboutPage;

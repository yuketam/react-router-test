import React from 'react';
import { Link } from 'react-router';

class Discovery extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1> --Discovery-- </h1>
          <h2>this is Discovery! </h2>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Discovery;
import React from 'react';
import { Link } from 'react-router';

class Top extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h1> --App-- </h1>
          <h2>Hello, World!</h2>
        </header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Top;
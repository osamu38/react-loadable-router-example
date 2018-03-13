import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        This is about page.<br />
        <Link to="/">To home page</Link><br />
        <Link to="/news">To news page</Link>
      </div>
    );
  }
}

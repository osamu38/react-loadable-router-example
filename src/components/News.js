import React from 'react';
import { Link } from 'react-router-dom';

export default class News extends React.Component {
  render() {
    return (
      <div className="Home">
        This is news page.<br />
        <Link to="/about">To about page</Link><br />
        <Link to="/">To home page</Link>
      </div>
    );
  }
}

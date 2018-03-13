import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        This is home page.<br />
        <Link to="/about">To about page</Link><br />
        <Link to="/news">To news page</Link>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
       <div className="logo">
        <img src="https://news.ycombinator.com/y18.gif" alt="logo" />
        <span className="title">Hacker news</span>
      </div>
      <div className="menu-container">
        <ul id="menu">
          <li className="item"><Link to="/">news</Link></li> |
          <li className="item"><Link to="/newest">newest</Link></li> |
          <li className="item"><Link to="/ask">ask</Link></li> |
          <li className="item"><Link to="/show">show</Link></li> |
          <li className="item"><Link to="/jobs">jobs</Link></li>
        </ul>
      </div>
    </div>
  )
}

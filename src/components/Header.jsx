import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
       <div className="logo">
         <Link to="/">
          <img src="https://news.ycombinator.com/y18.gif" alt="logo" />
         </Link>
        <span className="title">Hacker news</span>
      </div>
      <div className="menu-container">
        <ul id="menu">
          <li className="item"><NavLink to="/">news</NavLink></li> |
          <li className="item"><NavLink to="/newest">newest</NavLink></li> |
          <li className="item"><NavLink to="/ask">ask</NavLink></li> |
          <li className="item"><NavLink to="/show">show</NavLink></li> |
          <li className="item"><NavLink to="/jobs">jobs</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

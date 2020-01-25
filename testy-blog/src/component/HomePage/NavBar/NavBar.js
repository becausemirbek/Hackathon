import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="header">
          <div className="logo">
            <a href="/"><h1>Tasty plan</h1></a>
          </div>
          <ul className="menu">
            <a href="/"><li className="menu__item">ДОМОЙ</li></a>
            <li className="menu__item">ДОБАВИТЬ РЕЦЕПТ</li>
            <li className="menu__item">О НАС</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
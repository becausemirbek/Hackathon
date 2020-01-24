import React from 'react';
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="header">
          <div className="logo">
            <h1>Tasty plan</h1>
          </div>
          <ul className="menu">
            <li className="menu__item">ДОМОЙ</li>
            <li className="menu__item">ДОБАВИТЬ РЕЦЕПТ</li>
            <li className="menu__item">О НАС</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
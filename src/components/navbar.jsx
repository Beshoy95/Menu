import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item m-2">
          <span className="badge badge-primary">
            <i style={{ color: 'white' }} className="fas fa-cart-plus"></i>
            {props.productCount}</span>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  </nav>);
}



export default NavBar;
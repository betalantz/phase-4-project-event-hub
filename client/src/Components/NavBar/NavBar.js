import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Avatar from 'react-avatar'
import { useState } from 'react'
import { FaCaretUp } from "react-icons/fa";



const Navbar = ({ user, setUser }) => {
  const [showLogoutButton, setShowLogoutButton] = useState(false)

  function handleLogoutClick() {
    fetch("/logout", {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav className="navBar">
      <ul className="nav-links">
      <li className="nav-li">
          <NavLink className="nav-link one" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink className="nav-link two" to="/eventspage">
            Events
          </NavLink>
        </li>
        <li className="nav-li">
          <NavLink className="nav-link two" to="/friendspage">
            Friends
          </NavLink>
        </li>
        <li className="nav-li">
            <div onClick={() => setShowLogoutButton(!showLogoutButton)}>
            <Avatar 
                        round={true}
                        size={50}
                        className='avatar-photo-nav'
                        name={user.name}
                        color="#3C1874"
                        />
            </div>

              {showLogoutButton ? (<><FaCaretUp className='caret'/><button onClick={handleLogoutClick} className='logout-btn'>Logout</button></>
              ) : (null)}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;

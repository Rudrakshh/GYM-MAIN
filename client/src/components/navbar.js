import React, { useState, useEffect } from 'react';
import logo from "../images/LOGO.jpeg"

import { Link } from 'react-router-dom';

import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [nav, setNav] = useState(false);
  const [username, setUsername] = useState('');

  const changeBackground = () => {
    if (window.scrollY > 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    // Fetch the username from the server using the user ID
    const fetchUsername = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/user/${userId}`);
        if (response.status === 200) {
          const data = await response.json();
          setUsername(data.username);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsername();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [userId]);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <ScrollLink to="main" className="logo" smooth={true} duration={1000}>
        <img src={logo} alt="not found" />
      </ScrollLink>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <ScrollLink to="main" smooth={true} duration={1000}>
            HEADER
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="features" smooth={true} duration={1000}>
            FEATURE
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="presentaion" smooth={true} duration={1000}>
            OFFER
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="boxes" smooth={true} duration={1000}>
            PLANS
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={1000}>
            ABOUT
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} duration={1000}>
            CONTACT
          </ScrollLink>
        </li>
        <li>
        <Link to="/chat" style={{ textDecoration: 'none', color: 'white' }}>
        AI HELP
      </Link>
        </li>
      </ul>
      <p style={{ color: "white" }} >
      <Link to={`/profile/${userId}`} style={{ textDecoration: 'none', color: 'white' }}>
        {username}
      </Link>
      </p>
    </nav>
  );
}

export default Navbar;

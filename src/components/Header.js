import React from 'react';
import { NavLink } from 'react-router-dom';
import portrait from "./../images/NealPhoto.jpg";


function Header() {
    return (
        <header>
            <nav>
                <ul>
                <li className="page-link">
                    <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                        isActive ? "home-active" : "page-link"
                    }
                    >
                    About
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/ProjectGallery"
                    end
                    className={({isActive}) =>
                        isActive ? "project-active": "page-link"
                    }
                    >
                    Portfolio
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/Contact"
                    end
                    className={({isActive}) =>
                        isActive ? "contact-active": "page-link"
                    }
                    >
                    Contact
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/Research"
                    end
                    className={({ isActive }) =>
                        isActive ? "research-active" : "page-link"
                    }
                    >
                    Research
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/CV"
                    end
                    className={({ isActive }) =>
                        isActive ? "cv-active" : "page-link"
                    }
                    >
                    CV
                    </NavLink>
                </li>
                <li className="page-link" id="title-link">
                    <NavLink
                    to="/"
                    end>
                    <h1>Neal Reeves</h1>
                    </NavLink>
                </li>
                <li className="page-link" id="title-portrait">
                    <NavLink
                    to="/"
                    end>
                    <div className="mini-portrait" id="nav-portrait">
                    </div>
                    </NavLink>
                </li>
                </ul>
            </nav>
        </header> 
    )
}

  
export default Header;
  
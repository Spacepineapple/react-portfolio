import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                <li className="page-link">
                    <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "home-active" : "page-link"
                    }
                    >
                    Home
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
                    Portfolio
                    </NavLink>
                </li>
                </ul>
            </nav>
        </header> 
    )
}

  
export default Header;
  
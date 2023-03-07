import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    return (
        <>
        <header>
            <nav>
                <button className="hamburger" onClick={() => setBurgerOpen((status) => !status)}>
                    <img className="icon" src="/react-portfolio/images/hamburger.png" id="hamburger-icon"/>
                </button>
                <ul className="navbar-links">
                <li className="page-link">
                    <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                        isActive ? "link-active" : "nav-link"
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
                        isActive ? "link-active": "nav-link"
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
                        isActive ? "link-active": "nav-link"
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
                        isActive ? "link-active" : "nav-link"
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
                        isActive ? "link-active" : "nav-link"
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
        <div id="burger-links" className={burgerOpen ? "visible-burger" :  "invisible-burger"}>
                <ul id="burger-list">
                <li className="page-link">
                    <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                        isActive ? "link-active" : "nav-link"
                    }
                    onClick={() => setBurgerOpen(false)}
                    >
                    About
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/ProjectGallery"
                    end
                    className={({isActive}) =>
                        isActive ? "link-active": "nav-link"
                    }
                    onClick={() => setBurgerOpen(false)}
                    >
                    Portfolio
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/Contact"
                    end
                    className={({isActive}) =>
                        isActive ? "link-active": "nav-link"
                    }
                    onClick={() => setBurgerOpen(false)}
                    >
                    Contact
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/Research"
                    end
                    className={({ isActive }) =>
                        isActive ? "link-active" : "nav-link"
                    }
                    onClick={() => setBurgerOpen(false)}
                    >
                    Research
                    </NavLink>
                </li>
                <li className="page-link">
                    <NavLink
                    to="/CV"
                    end
                    className={({ isActive }) =>
                        isActive ? "link-active" : "nav-link"
                    }
                    onClick={() => setBurgerOpen(false)}
                    >
                    CV
                    </NavLink>
                </li>
                </ul>
            </div>    
        </>
    )
}

  
export default Header;
  
//Import the useState hook
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    /* Create a variable to hold whether the hamburger menu is open and to set
    the status of the hamburger menu. Set its initial state to false*/
    const [burgerOpen, setBurgerOpen] = useState(false);
    return (
        <>
        <header>
            <nav>
                {/*Add a button for the hamburger menu. When clicked, it should change the status of the hamburger menu to the opposite of its current status*/}
                <button className="hamburger" onClick={() => setBurgerOpen((status) => !status)}>
                    <img className="icon" src="/react-portfolio/images/hamburger.png" id="hamburger-icon" alt="hamburger-menu-icon"/>
                </button>
                <ul className="navbar-links">
                <li className="page-link">
                    <NavLink
                    to="/about"
                    end
                    /*If the link is active -- i.e., the page is currently displayed -- change the class of the link to "link-active. Otherwise, set it to nav-link*/
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
        {/*Repeat the links for the hamburger menu. If the burger menu status is set to True, set the class of the burger menu to visible-burger. Otherwise, set it to invisible-burger*/}
        <div id="burger-links" className={burgerOpen ? "visible-burger" :  "invisible-burger"}>
                <ul id="burger-list">
                <li className="page-link">
                    <NavLink
                    to="/about"
                    end
                    className={({ isActive }) =>
                        isActive ? "link-active" : "nav-link"
                    }
                    /*If the link is clicked, close the hamburger menu*/
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
  
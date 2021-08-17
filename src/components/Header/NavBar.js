import React from "react";
import SideMenu from "./SideMenu";
import { 
  Link
} from "react-router-dom";


const NavBar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigator">
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
      <div className="toolbar_logo">
        <div className="border-right"></div>
        <a href="/" className="logo">SAMASYS</a>
        <p>combat salary fraud</p>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/">
                Home
            </Link>
          </li>
          <li>
            <Link to="/profiles">
                  Profile
            </Link>
          </li>
          {/* <li>
            <Link to="/loan-records">
                  LOa
              </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;

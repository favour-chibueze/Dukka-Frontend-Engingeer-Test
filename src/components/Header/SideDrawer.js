import React from "react";
import { 
  Link
} from "react-router-dom";
import { faTimes } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const sideDrawer = props => {
    let drawerClasses = ["side-drawer"];
    let closeBtn =["side-drawer"]
  
    if (props.show) {
      drawerClasses = ["side-drawer", "open"];
    }
    return (
      <nav className={drawerClasses.join(" ")}>
       <FontAwesomeIcon icon={faTimes} className="close-btn" />
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
        </ul>
      </nav>
    );
  };
  export default sideDrawer;
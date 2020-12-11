import { observer } from "mobx-react";

//Components
import SigninButton from "./SignInButton";
import SignupButton from "./SignUpButton";

// Styles
import { NavStyled, Logo, NavItem } from "../styles";
// import authStore from "../stores/authStore";
// import { FiLogOut } from "react-icons/fi";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/" href="#">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/41cOeBbaV7L._AC_.jpg"
          alt="logo"
          width="50"
        />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavItem className="nav-item" to="/signup" style={{ padding: 10 }}>
              <SignupButton />
            </NavItem>
          </li>
          <li className="nav-item active">
            <NavItem className="nav-item" to="/signin" style={{ padding: 10 }}>
              <SigninButton />
            </NavItem>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);

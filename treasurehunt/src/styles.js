import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

// Background and Theme Styles
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.mainColor};
    background-color: ${({ theme }) => theme.backgroundColor}
  }
`;
export const theme = {
  mainColor: "#FF0000", // main font color
  backgroundColor: "white", // main background color
  pink: "#eea9b8",
  red: "#FF0000",
};

//Buttons
export const SignInButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const SignUpButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

//NavBar Styles

export const UsernameStyled = styled.p`
  padding: 0.25 em 1 em;
`;

export const Logo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;
export const NavStyled = styled.nav`
  background-color: ___CSS_0___;
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${({ theme }) => theme.mainColor};

  &.active {
    background-color: pink;
  }
`;

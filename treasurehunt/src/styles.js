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
  gold: "gold",
  navy: "navy",
  blue: "blue",
};

//Home Styling
export const RandomButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  /* background-color: #f2e596; */
  font-family: Arial, Helvetica, sans-serif;
`;

export const TreasureHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.gold};
  font-family: Arial, Helvetica, sans-serif;
`;

export const FreeJokeHeader = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.navy};
  font-family: Arial, Helvetica, sans-serif;
`;

export const HomeStyling = styled.div`
  margin: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const FreeJokeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  /* padding-bottom: 10px; */
  border: thick solid;
  border-color: ${({ theme }) => theme.navy};
`;

export const HomeGif = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  /* padding-bottom: 10px; */
  border: thick solid;
  border-color: ${({ theme }) => theme.gold};
`;

//Thing Styling
const ThingItemStyled = styled.div`
  color: ${({ theme }) => theme.mainColor};
  p {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
`;

export const ThingListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

//Buttons
export const SignInButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.backgroundColor};
`;

export const SignUpButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.backgroundColor};
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

export default ThingItemStyled;

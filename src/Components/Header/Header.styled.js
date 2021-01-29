import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 12px;

  @media only screen and (min-width: 768px) {
    padding: 42px 77px;
  }
`;

const activeClassName = "nav-item-active";

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const Nav = styled.nav`
  display: none;

  @media only screen and (min-width: 768px) {
    width: 537px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Div = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`

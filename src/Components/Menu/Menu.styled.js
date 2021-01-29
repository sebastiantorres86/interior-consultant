import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: center;
  padding: 258px 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
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

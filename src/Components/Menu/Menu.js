import React from "react";
import { StyledMenu, StyledLink } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      <StyledLink exact to="/collection">
        Collection
      </StyledLink>
      <StyledLink exact to="/about">
        About
      </StyledLink>
      <StyledLink exact to="/contact">
        Contact
      </StyledLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

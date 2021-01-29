import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, StyledLink, Div } from "./Header.styled";
import Logo from "../Logo/Logo";
import { Burger, Menu } from "../../Components";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Link exact to="/">
        <Logo />
      </Link>

      <Nav>
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
      </Nav>
      <Div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </Div>
    </Container>
  );
};

export default Header;

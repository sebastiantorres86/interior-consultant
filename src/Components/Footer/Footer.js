import React from "react";
import { Container, Link } from "./Footer.styled";

const Footer = () => {
  return (
    <Container>
        <hr />
      <Link
        href="https://www.linkedin.com/in/sebastian-torres-dev/"
        target="_blank"
      >
        Sebastian Torres
      </Link>{" "}
      @{" "}
      <Link href="https://devchallenges.io/" target="_blank">
        DevChallenge.io
      </Link>
    </Container>
  );
};

export default Footer;

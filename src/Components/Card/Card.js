import React from "react";
import { Wrapper, Row, Avatar } from "./Card.styled";

const Card = ({ heading, name, job, image }) => {
  return (
    <Wrapper>
      <Row>
        <Avatar src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <small>{job}</small>
        </div>
      </Row>
      <h2>{heading}</h2>
    </Wrapper>
  );
};

export default Card;

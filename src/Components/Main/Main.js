import React from "react";
import { Container, Row, Column, ColumnImage, Image } from "./Main.styled";
import { Link } from "react-router-dom";
import Image1 from "../../assets/photo1.png";
import Avatar from "../../assets/photo2.png";
import Card from "../Card";

const Main = () => {
  return (
    <Container>
      <Row>
        <Column>
          <h1>Modern interior</h1>
          <p>
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco&#8209;services.
          </p>
          <Link exact to="/Collection">
            Read more &rarr;
          </Link>
        </Column>
        <ColumnImage>
          <Image src={Image1} alt="design" />
          <Card
            heading={"Designed in 2020 by Aliza Webber"}
            name={"Aliza Webber"}
            job={"Interior designer"}
            image={Avatar}
          />
        </ColumnImage>
      </Row>
    </Container>
  );
};

export default Main;

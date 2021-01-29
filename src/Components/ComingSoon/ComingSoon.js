import React from "react";
import image from "../../assets/ComingSoon.svg";
import { Div, Image } from "./ComingSoon.styled";

const ComingSoon = () => {
  return (
    <Div>
      <Image src={image} alt="Coming Soon" />
    </Div>
  );
};

export default ComingSoon;

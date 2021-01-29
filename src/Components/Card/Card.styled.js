import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 300px;
  max-height: 138px;
  background: #181719;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px 0 25px 19px;

  position: absolute;
  bottom: -30%;
  left: 11%;

  @media only screen and (min-width: 768px) {
    max-width: 410px;
    max-height: 189px;
    box-shadow: none;
    padding: 20px 0 34px 26px;

    bottom: -19.5%;
    left: 40%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-content: center;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 1rem;

  @media only screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

import styled from "styled-components";

export const Main = styled.main`
  padding: 27px 12px 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;

  @media only screen and (min-width: 768px) {
    padding: 2rem 77px;;
    flex-direction: row;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media only screen and (min-width: 768px) {
    width: 30%;
    /* margin-right: 5rem; */
  }
`;

export const Label = styled.label`
  margin: 1rem 0;
`;

export const Input = styled.input`
  height: 36px;
`;

export const Textarea = styled.textarea`
  min-height: 125px;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  height: 36px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
`;

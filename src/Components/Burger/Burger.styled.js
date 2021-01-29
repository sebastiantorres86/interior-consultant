import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  top: 25px;
  right: 12.75px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 28.5px;
  height: 28.5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 28.5px;
    height: 3px;
    background: ${({ theme }) => theme.primaryLight};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

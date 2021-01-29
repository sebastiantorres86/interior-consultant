import styled from "styled-components";

export const Container = styled.div`
  padding: 27px 12px 23px;

  @media only screen and (min-width: 768px) {
    padding: 129px 77px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: 100%;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    flex: 50%;
    :first-child {
      padding-right: 7rem;
    }
  }
`;

export const ColumnImage = styled(Column)`
  position: relative;

  @media only screen and (min-width: 768px) {
    flex: 70%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

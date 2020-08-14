import styled, { css } from "styled-components";

export const LayoutWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  grid-area: main;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0px 10px 15px #1b1c2029;
  background: #e6e6e6;
  cursor: pointer;
  transition: transform 500ms ease;
  ${({ background }) =>
    background &&
    css`
      background: ${background} !important;
    `}
  padding: 2rem;
  margin: 1.5rem;

  @media (min-width: 768px) {
    flex: 1 0 auto;
  }

  &:hover {
    transform: translateY(-1rem);
  }
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #515768;
  margin-bottom: 1rem;
`;
export const Body = styled.div`
  font-size: 3.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #515768;
  > p {
    > span {
      margin-left: 1rem;
    }
  }
`;
export const Footer = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  > p {
    > span {
      margin-left: 0.5rem;
    }
  }
`;

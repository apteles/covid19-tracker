import React from "react";

import { Container, LayoutWrapper, Title, Body, Footer } from "./styles";

export function Wrapper({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

function CardInfo({ title, cases, total, bg }) {
  return (
    <Container background={bg}>
      <Title>{title}</Title>
      <Body>
        <p>
          Hoje
          <span>{cases}</span>
        </p>
      </Body>
      <Footer>
        <p>
          Total:
          <span>{total}</span>
        </p>
      </Footer>
    </Container>
  );
}

export default CardInfo;

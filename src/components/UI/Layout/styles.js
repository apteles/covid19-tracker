import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

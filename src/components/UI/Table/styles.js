import styled from "styled-components";

export const Container = styled.div`
  grid-area: "main";

  @media (min-width: 768px) {
    grid-area: sidebar;
  }
`;

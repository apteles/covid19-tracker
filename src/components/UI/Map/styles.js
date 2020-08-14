import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  > div {
    width: calc(100% - 3rem); /* retira margens */
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 0px 10px 15px #1b1c2029;
  }
`;

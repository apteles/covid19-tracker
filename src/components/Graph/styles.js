import styled, { css } from "styled-components";

export const Container = styled.div`
  max-height: 30vh;
`;
export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* width: calc(100% - 3rem); retira margens */
  margin: 3rem auto;

  > select {
    flex: 1 0 auto;
    border: 1px solid #e6e6e6;
    background: transparent;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 3px;
  }
`;
export const Button = styled.button`
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 30px;
  color: #515768;
  font-weight: 400;
  border: none;
  transition: background ease 500ms;
  ${(props) =>
    props.active &&
    css`
      background: #5dead7 !important;
    `}
  &:active {
    background: #b6bad1;
  }
`;

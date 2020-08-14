import styled, { css } from "styled-components";
import { FiArrowUpCircle } from "react-icons/fi";
export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden; /** hidden the arrow back to top */
  box-shadow: 0px 10px 15px #1b1c2029;
  border-radius: 3px;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000;
  }

  > div {
    width: 100%;
    margin-top: 2rem;
    max-height: 50vh;
    overflow-y: scroll;

    > table {
      width: 100%;
      border-spacing: 0;

      thead [role="columnheader"] {
        font-size: 2.5rem;
        color: #515768;
        text-align: center;
      }

      tbody tr:nth-of-type(odd) {
        background-color: #dedede;
      }
      th,
      td {
        margin: 0;
        padding: 0.5rem;

        font-size: 1.2rem;
        font-weight: 400;
        :last-child {
          border-right: 0;
        }
      }
    }
  }
`;
export const Title = styled.div``;
export const Arrow = styled(FiArrowUpCircle)`
  position: absolute;
  top: 45vh;
  right: 20px;
  font-size: 3rem;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;

  transition: visibility 500ms ease, opacity 500ms ease;

  ${(props) =>
    props.show &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

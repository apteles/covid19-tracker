import styled, { css } from "styled-components";

const flatStyle = css`
  .info-flag img {
    width: 100px;
    border-radius: 5px;
  }

  .info-name {
    font-size: 20px;
    font-weight: bold;
    color: #555;
  }

  .info-container {
    width: 150px;
  }

  .info-flag {
    height: 80px;
    width: 100%;
    background-size: cover;
    border-radius: 8px;
  }

  .info-confirmed,
  .info-recovered,
  .info-deaths {
    font-size: 16px;
    margin-top: 5px;
  }
`;

export const Container = styled.div`
  ${flatStyle}
`;

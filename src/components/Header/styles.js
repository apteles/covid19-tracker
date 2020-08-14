import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
`;

export const WrapperLogo = styled.h1`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
`;

export const WrapperSelect = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
    align-items: flex-end;
  }
`;
export const Select = styled.select`
  padding: 1rem;
  width: 50%;
  border-radius: 3px;
  border-color: #e1e2e2;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

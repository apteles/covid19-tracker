import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo2.png";
function Header({ handleCountry, currentValue, countries }) {
  return (
    <S.Container>
      <S.WrapperLogo>
        <S.Logo src={logo} alt="covid 19 tracker" />
      </S.WrapperLogo>

      <S.WrapperSelect>
        <S.Select
          value={currentValue}
          onChange={(e) => handleCountry(e.target.value)}
        >
          <option value={currentValue}> {currentValue} </option>

          {countries.map(({ country }) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </S.Select>
      </S.WrapperSelect>
    </S.Container>
  );
}

export default React.memo(Header);

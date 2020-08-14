import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/global";
import "leaflet/dist/leaflet.css";
import Layout from "./components/UI/Layout";
import Main from "./components/UI/Main";
import Sidebar from "./components/UI/Sidebar";
import Header from "./components/Header";
import TableLiveCases from "./components/TableLiveCases";
import Graph from "./components/Graph";
import CovidMap from "./components/CovidMap";
import CardInfo, { Wrapper } from "./components/CardInfo";
import useFetch from "./hooks/useFetch";

const buildURL = (term) => {
  return term === "Mundo"
    ? "https://disease.sh/v3/covid-19/all"
    : `https://disease.sh/v3/covid-19/countries/${term}`;
};

const transformDataCountry = (data) =>
  data.reduce(
    (acc, cv) => [
      ...acc,
      { country: cv.country, cases: cv.cases, countryInfo: cv.countryInfo },
    ],
    []
  );

function App() {
  const [query, setQuery] = useState("Mundo");

  const [generaControl] = useFetch(
    "https://disease.sh/v3/covid-19/countries",
    [],
    (data) => transformDataCountry(data)
  );
  const [control, doFetch] = useFetch(buildURL(query), []);

  const { data: countries } = generaControl;
  const { loading, error, data: generalInfo } = control;

  useEffect(() => {
    doFetch(buildURL(query));
  }, [doFetch, query]);
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Main>
          <Header
            handleCountry={setQuery}
            currentValue={query}
            countries={countries}
          />
          {error && <h1>Erro ao processar requisição</h1>}
          {loading ? (
            <h1>Loading</h1>
          ) : (
            <Wrapper>
              <CardInfo
                title="Casos Coronavírus"
                cases={generalInfo.todayCases}
                total={generalInfo.cases}
                bg="#839efc"
              />
              <CardInfo
                title="Mortes"
                cases={generalInfo.todayDeaths}
                total={generalInfo.deaths}
                bg="#d22828"
              />
              <CardInfo
                title="Recuperados"
                cases={generalInfo.todayRecovered}
                total={generalInfo.recovered}
                bg="#00e676"
              />
            </Wrapper>
          )}

          {generalInfo && (
            <CovidMap
              centralize={
                generalInfo.countryInfo
                  ? generalInfo.countryInfo
                  : { lat: 34.80746, long: -40.4796 }
              }
              countries={countries}
            />
          )}
        </Main>
        <Sidebar>
          <TableLiveCases data={countries} />
          <Graph />
        </Sidebar>
      </Layout>
    </div>
  );
}

export default App;

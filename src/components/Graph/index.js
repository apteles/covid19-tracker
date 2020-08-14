import React, { useState, useEffect, useCallback } from "react";
import { Line } from "react-chartjs-2";
import { Container, Actions, Button, ButtonGroup } from "./styles";
import useFetch from "../../hooks/useFetch";
import optionsChart from "./options";

const buildChartData = (data, caseType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[caseType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }
  return chartData;
};

function Graph() {
  const [days, setDays] = useState(30);
  const [caseType, setCaseType] = useState("cases");

  const [control, doFetch] = useFetch(
    `https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`,
    []
  );
  const fetchCallback = useCallback(doFetch, []);
  const { data, loading, error } = control;

  useEffect(() => {
    fetchCallback(
      `https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`,
      []
    );
  }, [days, fetchCallback]);

  const onHandleCaseType = (e) => {
    setCaseType(e.target.value);
  };

  return (
    <Container>
      <Actions>
        <select value={caseType} onChange={onHandleCaseType}>
          <option value="cases">Casos</option>
          <option value="recovered"> Recuperados</option>
          <option value="deaths">Mortes</option>
        </select>
        <ButtonGroup>
          <Button onClick={(_) => setDays(30)} active={days === 30}>
            30
          </Button>
          <Button onClick={(_) => setDays(60)} active={days === 60}>
            60
          </Button>
          <Button onClick={(_) => setDays(90)} active={days === 90}>
            90
          </Button>
          <Button onClick={(_) => setDays(120)} active={days === 120}>
            120
          </Button>
        </ButtonGroup>
      </Actions>
      {error && <h1>Erro ao processar requisição</h1>}
      {loading && <h1>Carregando gráfico</h1>}
      {data && (
        <Line
          options={optionsChart}
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204,16,53,0.4)",
                borderColor: "#cc1034",
                data: buildChartData(data, caseType),
              },
            ],
          }}
        />
      )}
    </Container>
  );
}

export default Graph;

// [
//   {
//     x: "4/14/20",
//     y: 1985901,
//   },
//   {
//     x: "4/15/20",
//     y: 2066740 - 1985901,
//   },
//   {
//     x: "4/16/20",
//     y: 2163426 - (2066740 - 1985901),
//   },
//   {
//     x: "4/17/20",
//     y: 2251145 - (2163426 - (2066740 - 1985901)),
//   },
//   {
//     x: "5/16/20",
//     y: 2163426 - (2066740 - 1985901),
//   },
//   {
//     x: "5/17/20",
//     y: 2251145 - (2163426 - (2066740 - 1985901)),
//   },
//   {
//     x: "6/16/20",
//     y: 2163426 - (2066740 - 1985901),
//   },
//   {
//     x: "6/17/20",
//     y: 2251145 - (2163426 - (2066740 - 1985901)),
//   },
// ],

import axios from "axios";
// https://disease.sh/v3/covid-19/all
// https://disease.sh/v3/covid-19/${countryCode}
export default axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});

export default function fetchPlanets() {
  return fetch("https://swapi.dev/api/planets/")
    .then((res) => res.json())
    .then((json) => json.results);
}

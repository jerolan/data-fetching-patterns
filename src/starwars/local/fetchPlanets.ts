export default async function getPlanets() {
  return [
    {
      climate: "Arid",
      diameter: "10465",
      gravity: "1 standard",
      name: "Tatooine",
      orbital_period: "304",
      population: "200000",
      residents: [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
      ],
      rotation_period: "23",
      surface_water: "1",
      terrain: "Dessert",
      url: "https://swapi.dev/api/planets/1/",
    },
  ];
}

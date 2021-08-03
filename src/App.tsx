import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import PlanetList from "./starwars/internal/PlanetList";
import GetPlanets from "./starwars/local/GetPlanets";
// import createGetPlanets from "./starwars/internal/createGetPlanets";
// import usePlanets from "./starwars/local/usePlanets";
// import usePlanets from "./starwars/external/usePlanets";

const queryClient = new QueryClient();

// The production build
function App() {
  const { usePlanets } = useDataProvider();
  const planets = usePlanets();

  return (
    <QueryClientProvider client={queryClient}>
      <NoSeComoContext>
        <Artist artistId={1}  />
        getArtis(id)
      </NoSeComoContext>
    </QueryClientProvider>
  );
}

// The test
function App() {
  return <NoSeComoContext>
    <PlanetList  />
  <NoSeComoContext>;
}

export default App;

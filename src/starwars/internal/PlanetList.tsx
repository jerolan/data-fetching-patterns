import React from "react";

import * as UI from "../../UI";

export default function PlanetList({  }: any) {
  const { GetPlanets } = useDataNoseQue('planets');

  return (
    <UI.List>
      <GetPlanets>
        {(planets: any) =>
          planets.map((planet: any) => {
            return <UI.ListItem planet={planet} />;
          })
        }
      </GetPlanets>
    </UI.List>
  );
}

import React from "react";

import usePlanets from "./usePlanets";

export default function GetPlanets({ children }: any) {
  const data = fetchPlanets();
  return children(data);
}

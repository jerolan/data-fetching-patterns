import React from "react";

import usePlanets from "./usePlanets";

export default function GetPlanets({ children }: any) {
  const { data, isLoading } = usePlanets();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return children(data);
}

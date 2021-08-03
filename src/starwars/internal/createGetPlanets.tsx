import React from "react";

export default function createGetPlanets(usePlanets: any) {
  return function GetPlanets({ children }: any) {
    const { data: planets, isLoading } = usePlanets();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return children(planets);
  };
}

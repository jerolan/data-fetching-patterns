import { useState, useEffect } from "react";
import getPlanets from "./fetchPlanets";

export default function usePlanets() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setLists] = useState<Array<any>>([]);

  useEffect(() => {
    setIsLoading(true);

    getPlanets()
      .then((plants) => {
        setLists(plants);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return { isLoading, data };
}

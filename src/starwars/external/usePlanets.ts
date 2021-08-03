import { useQuery, useQueryClient } from "react-query";
import fetchPlanets from "./fetchPlanets";

export default function usePlanets() {
  const query = useQuery("planets", fetchPlanets);
  return query;
}

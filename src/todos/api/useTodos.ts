import { useQuery } from "react-query";
import { getTodos } from "../../api";

export const KEY = "todos";

export default function useTodos() {
  const { data, isLoading } = useQuery(KEY, getTodos);
  return { data, isLoading };
}

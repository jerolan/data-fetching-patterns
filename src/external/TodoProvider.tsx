import React, { useMemo } from "react";

import { TodoProvider } from "../todos/TodoContext";
import useCreateTodo from "./useCreateTodo";
import useTodos from "./useTodos";

export default function QueryTodoProvider({ children }: any) {
  const { data, isLoading } = useTodos();
  const createTodo = useCreateTodo();

  const value = useMemo(() => {
    return { todos: data, createTodo, loading: isLoading };
  }, [data, isLoading, createTodo]);

  return <TodoProvider value={value}>{children}</TodoProvider>;
}

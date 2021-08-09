import React, { useMemo } from "react";

import { TodoProvider } from "../TodoContext";
import useCreateTodo from "./useCreateTodo";
import useTodos from "./useTodos";
import useUpdateTodo from "./useUpdateTodo";

export default function QueryTodoProvider({ children }: any) {
  const { data, isLoading } = useTodos();
  const updateTodo = useUpdateTodo();
  // could pass down isCreatingTodo to manage loading states
  // that also can cause a loot of rerenders
  // but
  // 1 - could split and memo diferentes values for Create, Update and Fetch
  // 2 - split TodoContext in to TodoCreateContext, TodoUpdateContext, TodoContext, but may be overkill
  // 3 - fix it with a context selector like useContextSelector
  // const [createTodo, { loading: isLoadingTodo }] = useCreateTodo();
  const createTodo = useCreateTodo();

  const value = useMemo(() => {
    return { todos: data, createTodo, updateTodo, loading: isLoading };
  }, [data, isLoading, createTodo, updateTodo]);

  return <TodoProvider value={value}>{children}</TodoProvider>;
}

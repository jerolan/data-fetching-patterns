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
  // 1 - split TodoContext in to TodoCreateContext, TodoUpdateContext, TodoContext, but may be overkill
  // 2 - fix it with a context selector like useContextSelector
  // 3 - maybe the module is doing more than one responsabity and could be splited y two or more Context Modules
  // const [createTodo, { loading: isLoadingTodo }] = useCreateTodo();
  const createTodo = useCreateTodo();

  const value = useMemo(() => {
    return { todos: data, createTodo, updateTodo, loading: isLoading };
  }, [data, isLoading, createTodo, updateTodo]);

  return <TodoProvider value={value}>{children}</TodoProvider>;
}

// some alternative
//
// export default function QueryTodoProvider({ children }: any) {
//   const { data: todos, isLoading } = useTodos();
//   const [updateTodo, { loading: isUpdating }] = useUpdateTodo();
//   const [createTodo, { loading: isCreating }] = useCreateTodo();

//   const value = useMemo(() => {
//     return { todos, createTodo, updateTodo, isLoading, isUpdating, isCreating };
//   }, [todos, createTodo, updateTodo, isLoading, isUpdating, isCreating]);

//   return <TodoProvider value={value}>{children}</TodoProvider>;
// }

// example for case 1 - this option also could be a Generic "MutationProvider" that handles CRUD uperations
// a downside could be that creates some boilerplate
//
// export default function RQueryTodoCreateProvider({ children }: any) {
//   // where value is [mutateFn, {loading, error}]
//   const value = useCreateTodo();
//   return <TodoCreateProvider value={value}>{children}</TodoProvider>;
// }

// example for case 2
//
// for concrete usage in `TodoForm.tsx`
// function useCreateTodo() {
//   const value = useContextSelector(TodoContext, c => [c.createTodo, {loading: c.isCreating}]);
//   // where value becomes [mutateFn, {loading}]
//   return value
// }

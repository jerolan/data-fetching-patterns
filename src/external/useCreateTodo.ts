import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTodo, Todo } from "../api";

import { KEY } from "./useTodos";

export default function useCreateTodo() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: (data, variables, context: any) => {
      const prevTodos = context.prevTodos as Array<Todo>;
      queryClient.setQueryData(KEY, [...prevTodos, data]);
    },
    onMutate: async (text) => {
      await queryClient.cancelQueries(KEY);
      const prevTodos = queryClient.getQueryData<Array<Todo>>(KEY) ?? [];

      queryClient.setQueryData(KEY, [
        ...prevTodos,
        { text, id: Date.now().toString(), completed: false },
      ]);

      return { prevTodos };
    },
    onError: (err, newTodo, context: any) => {
      queryClient.setQueryData(KEY, context.prevTodos);
    },
  });

  const createTodo = useCallback((text: string) => {
    mutation.mutate(text);
  }, []);

  return createTodo;
}

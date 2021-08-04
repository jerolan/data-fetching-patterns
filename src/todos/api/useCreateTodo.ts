import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTodo, Todo } from "../../api";

import { KEY } from "./useTodos";

export default function useCreateTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation(addTodo, {
    onMutate: async (text) => {
      await queryClient.cancelQueries(KEY);
      const prevTodos = queryClient.getQueryData<Array<Todo>>(KEY) ?? [];

      queryClient.setQueryData(KEY, [
        ...prevTodos,
        { text, id: Date.now().toString(), completed: false }
      ]);

      return { prevTodos };
    },
    onError: (err, newTodo, context: any) => {
      queryClient.setQueryData(KEY, context.prevTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries(KEY);
    }
  });

  const createTodo = useCallback(
    (text: string) => {
      mutation.mutate(text);
    },
    [mutation]
  );

  return createTodo;
}

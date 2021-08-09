import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { UpdateTodoInput } from "../TodoContext";
import { updateTodo, Todo } from "../../api";

import { KEY } from "./useTodos";

export default function useCreateTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation<Todo, Error, UpdateTodoInput>(
    (vars) => updateTodo(vars.id, vars.text, vars.completed),
    {
      onMutate: async (vars) => {
        await queryClient.cancelQueries(KEY);
        const prevTodos = queryClient.getQueryData<Array<Todo>>(KEY) ?? [];
        const updatedTodos = prevTodos.map((todo) => {
          if (todo.id !== vars.id) return todo;

          return {
            ...todo,
            ...vars
          };
        });

        queryClient.setQueryData(KEY, updatedTodos);
        return { prevTodos };
      },
      onError: (err, vars, context: any) => {
        queryClient.setQueryData(KEY, context.prevTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries(KEY);
      }
    }
  );

  return useCallback(
    (input: UpdateTodoInput) => {
      return mutation.mutateAsync(input);
    },
    [mutation]
  );
}

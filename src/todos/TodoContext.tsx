import { createContext, useContext } from "react";
import { Todo } from "../api";

export type CreateTodoInput = string;
export type UpdateTodoInput = {
  id: string;
  completed: boolean;
  text: string;
};

interface TodoContextValue {
  todos: Todo[] | undefined;
  loading: boolean;
  createTodo(text: CreateTodoInput): void;
  updateTodo(input: UpdateTodoInput): Promise<Todo>;
}

export const TodoContext = createContext<TodoContextValue | undefined>(
  undefined
);

export const TodoProvider = TodoContext.Provider;

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }

  return context;
}

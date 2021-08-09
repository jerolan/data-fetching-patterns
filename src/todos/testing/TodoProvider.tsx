import React, { useMemo, useState } from "react";
import { TodoProvider, UpdateTodoInput } from "../TodoContext";
import { Todo } from "../../api";

export default function LocalTodoProvider({ children }: any) {
  const [todos, setTodos] = useState([
    {
      id: Date.now().toString(),
      text: "Use Redux",
      completed: false
    }
  ]);

  function createTodo(text: string) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          text,
          id: Date.now().toString(),
          completed: false
        }
      ];
    });
  }

  function updateTodo(input: UpdateTodoInput) {
    return new Promise<Todo>((resolve, reject) => {
      setTodos((prevTodos) => {
        const todoIndex = prevTodos.findIndex((t) => t.id === input.id);
        if (todoIndex < 0) {
          reject(`Todo with id ${input.id} not found`);
          return prevTodos;
        }

        const updatedTodos = prevTodos.map((todo) => {
          if (todo.id !== input.id) return todo;

          return {
            ...todo,
            ...input
          };
        });

        resolve(updatedTodos[todoIndex]);
        return updatedTodos;
      });
    });
  }

  const value = useMemo(() => {
    return { todos, createTodo, updateTodo, loading: false };
  }, [todos]);

  return <TodoProvider value={value}>{children}</TodoProvider>;
}

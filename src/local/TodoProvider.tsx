import React, { useMemo, useState } from "react";

import { TodoProvider } from "../todos/TodoContext";

export default function LocalTodoProvider({ children }: any) {
  const [todos, setTodos] = useState([
    {
      id: Date.now().toString(),
      text: "Use Redux",
      completed: false,
    },
  ]);

  function createTodo(text: string) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          text,
          id: Date.now().toString(),
          completed: false,
        },
      ];
    });
  }

  const value = useMemo(() => {
    return { todos, createTodo, loading: false };
  }, [todos]);

  console.log({ value });
  return <TodoProvider value={value}>{children}</TodoProvider>;
}

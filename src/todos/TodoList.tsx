import React from "react";
import { Todo } from "../api";
import { useTodoContext } from "./TodoContext";

export default function TodoList() {
  const { todos, loading } = useTodoContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-2 py-4">
      {todos?.map((todo: Todo) => {
        return (
          <div className="flex items-center space-x-4" key={todo.id}>
            <input type="checkbox" />
            <input
              type="text"
              className="bg-transparent w-full"
              value={todo.text}
            />
          </div>
        );
      })}
    </div>
  );
}

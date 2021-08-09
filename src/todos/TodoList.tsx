import React from "react";
import { Todo } from "../api";
import { useTodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import TodoCheckbox from "./TodoCheckbox";

export default function TodoList() {
  const { todos, loading } = useTodoContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-2 py-4">
      {todos?.map((todo: Todo) => {
        return (
          <TodoItem key={todo.id}>
            <TodoCheckbox todo={todo} />
            <TodoInput todo={todo} />
          </TodoItem>
        );
      })}
    </div>
  );
}

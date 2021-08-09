import React, { useState } from "react";
import { Todo } from "../api";
import { useTodoContext } from "./TodoContext";

export default function TodoInput({ todo }: { todo: Todo }) {
  const [text, setText] = useState(todo.text);
  const { updateTodo } = useTodoContext();

  function handleTextChange(e: any) {
    setText(e.target.value);
  }

  function handleBlur() {
    updateTodo({
      text,
      id: todo.id,
      completed: todo.completed
    });
  }

  return (
    <input
      aria-label={text}
      type="text"
      className="bg-transparent w-full"
      onChange={handleTextChange}
      onBlur={handleBlur}
      value={text}
    />
  );
}

import React, { useState } from "react";
import { Todo } from "../api";
import { useTodoContext } from "./TodoContext";

export default function TodoCheckbox({ todo }: { todo: Todo }) {
  const [isChecked, setIsChecked] = useState<boolean>(todo.completed);
  const { updateTodo } = useTodoContext();

  function handleChange() {
    setIsChecked((prevIsChecked) => {
      const updatedIsChecked = !prevIsChecked;

      updateTodo({
        id: todo.id,
        text: todo.text,
        completed: updatedIsChecked
      });

      return updatedIsChecked;
    });
  }

  return <input type="checkbox" checked={isChecked} onChange={handleChange} />;
}

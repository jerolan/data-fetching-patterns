import React from "react";
import useCreateTodo from "../external/useCreateTodo";

export default function Todos() {
  const [text, setText] = React.useState("");
  const createTodo = useCreateTodo();

  function handleAddTodo(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(text);
    setText("");
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input
        required
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-transparent w-full"
        placeholder="Write something"
      />
    </form>
  );
}

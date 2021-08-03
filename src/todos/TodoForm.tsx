import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../api";

export default function Todos() {
  const [text, setText] = React.useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  function handleAddTodo(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(text);
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

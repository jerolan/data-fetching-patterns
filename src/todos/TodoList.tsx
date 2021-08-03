import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api";

export default function TodoList() {
  const { data, isLoading } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-2 py-4">
      {data?.map((todo) => {
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

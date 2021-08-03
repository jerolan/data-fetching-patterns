import React from "react";
import { useQuery } from "react-query";
import { getTodos } from "../api";

export default function Todos() {
  const { data, isLoading } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-black h-screen w-full pt-20">
      <div
        style={{ backgroundColor: "#FFFF99" }}
        className="w-full max-w-2xl mx-auto rounded h-full overflow-y-scroll p-4"
      >
        <p className="font-bold border-b border-black pb-4">Todos</p>
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
          <form>
            <input
              required
              type="text"
              className="bg-transparent w-full"
              placeholder="Write something"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

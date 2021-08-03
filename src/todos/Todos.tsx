import React from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <div className="bg-black h-screen w-full pt-20">
      <div
        style={{ backgroundColor: "#FFFF99" }}
        className="w-full max-w-2xl mx-auto rounded h-full overflow-y-scroll p-4"
      >
        <p className="font-bold border-b border-black pb-4">Todos</p>
        <TodoList />
        <TodoForm />
      </div>
    </div>
  );
}

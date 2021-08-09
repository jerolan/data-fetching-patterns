import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import TodoProvider from "../testing/TodoProvider";
import Todos from "../Todos";

test("creates a todo", () => {
  render(
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );

  const text = "Hola Mundo!";
  expect(screen.queryByRole("textbox", { name: text })).not.toBeInTheDocument();

  const input = screen.getByPlaceholderText("Write something");
  user.type(input, `${text}{enter}`);

  expect(screen.getByRole("textbox", { name: text })).toBeInTheDocument();
  expect(input).toHaveValue("");
});

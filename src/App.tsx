import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import TodoProvider from "./todos/api/TodoProvider";
import Todos from "./todos/Todos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </QueryClientProvider>
  );
}

export default App;

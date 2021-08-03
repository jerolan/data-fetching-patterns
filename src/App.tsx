import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import ExternalTodoProvider from "./external/TodoProvider";
// import LocalTodoProvider from "./local/TodoProvider";
import Todos from "./todos/Todos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExternalTodoProvider>
        <Todos />
      </ExternalTodoProvider>
    </QueryClientProvider>
  );
}

// function App() {
//   return (
//     <LocalTodoProvider>
//       <Todos />
//     </LocalTodoProvider>
//   );
// }

export default App;

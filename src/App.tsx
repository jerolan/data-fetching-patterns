import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import Todos from "./todos/Todos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

export default App;

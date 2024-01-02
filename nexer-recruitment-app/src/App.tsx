import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import Loader from "@/components/Loader/Loader";
import { router } from "@/router/routerConfig";
import { queryClient } from "@/providers/TanstackQueryProvider/queryClient";
import "./App.scss";

function App() {
  return (
    <div className={"wrapper"}>
      <QueryClientProvider client={queryClient}>
        <Loader />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

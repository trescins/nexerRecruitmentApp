import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Movie from "@/pages/Movie/Movie";
import Actor from "@/pages/Actor/Actor";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.MOVIE,
    element: <Movie />,
  },
  {
    path: ROUTES.ACTOR,
    element: <Actor />,
  },
]);

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import CategoryPage from "../pages/CategoryPage";
import Tags from "../pages/Tags";
import SearchResults from "../components/SearchResults";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:slug",
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "tags/:slug",
        element: <Tags />,
      },
      {
        path: "Movie/:slug",
        element: <MovieDetails />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export default Routes;

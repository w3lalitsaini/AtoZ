import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import CategoryPage from "../pages/CategoryPage";
import Tags from "../pages/Tags";
import GenrePage from "../pages/GenrePage";
import GenreDetail from "../pages/GenreDetail";
import AppContent from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContent>
        <Layout />
      </AppContent>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "category/:slug", element: <CategoryPage /> },
      { path: "genre", element: <GenrePage /> },
      { path: "genre/:slug", element: <GenreDetail /> },
      { path: "tags/:slug", element: <Tags /> },
      { path: "Movie/:slug", element: <MovieDetails /> },
    ],
  },
]);

export default routes;

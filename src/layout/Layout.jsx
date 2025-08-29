import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import ScrollTop from "../components/ScrollTop";
import { Title, Meta, Link as HeadLink } from "react-head";

const Layout = () => {
  return (
    <>
      {/* Global SEO */}
      <Title>Movie Reviews | Latest, Trending & Top Rated</Title>
      <Meta
        name="description"
        content="Read the latest movie reviews, ratings, and trailers. Find trending, top-rated, and upcoming movies in one place."
      />
      <Meta
        name="keywords"
        content="movie reviews, film ratings, trailers, latest movies, trending movies, top rated films"
      />
      <HeadLink rel="canonical" href="https://atozmovies.in" />

      {/* Open Graph */}
      <Meta property="og:title" content="Movie Reviews" />
      <Meta
        property="og:description"
        content="Discover trending movies, ratings, and trailers."
      />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://atozmovies.in" />
      <Meta property="og:image" content="https://atozmovies.in/og-image.jpg" />

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Movie Reviews" />
      <Meta
        name="twitter:description"
        content="Discover trending movies, ratings, and trailers."
      />
      <Meta name="twitter:image" content="https://atozmovies.in/og-image.jpg" />

      {/* Page Layout */}
      <ScrollTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Layout;

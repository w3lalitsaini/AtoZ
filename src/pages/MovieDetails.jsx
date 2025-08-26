import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";
import { FaStar, FaTags, FaDownload, FaShareAlt } from "react-icons/fa";
import AdBanner from "../components/AdBanner";
import Recommended from "../components/Recommended";

const MovieDetails = () => {
  const convertToEmbedUrl = (url) => {
    if (!url) return null;
    return url.replace("watch?v=", "embed/");
  };

  const { slug } = useParams();
  const movie = data.find((movie) => movie.slug === slug);

  if (!movie) {
    return (
      <div className="p-10 text-center text-red-500 text-xl font-bold">
        Movie not found.
      </div>
    );
  }

  const downloadQualities = ["480p", "720p", "1080p", "4K"];

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 py-10 text-white">
        {/* Description */}
        <div className="mb-8 bg-black/40 py-4 rounded shadow">
          <p className="text-lg leading-relaxed">
            Download or Watch{" "}
            <strong>
              {movie.title} ({movie.year})
            </strong>{" "}
            in multiple resolutions including 480p, 720p, 1080p, 4K. Available
            in multi-audio (Hindi, English, Tamil, Telugu) with English
            subtitles.
          </p>
        </div>

        {/* Poster + Info */}
        <div className="flex flex-col gap-8">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-[60vh] object-cover rounded shadow-lg"
          />

          {/* Info Block */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-green-500 mb-2">
              {movie.title}
            </h1>
            <p className="text-gray-400 text-xl mb-2">{movie.year}</p>

            <div className="flex items-center gap-1 text-yellow-500 mb-4">
              <FaStar />
              <span className="text-xl font-medium text-white">
                {movie.rating}
              </span>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.category?.map((cat, i) => (
                <span
                  key={i}
                  className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((gen, i) => (
                <Link
                  to={`/tags/${gen}`}
                  key={i}
                  className="bg-gray-600 text-white px-2 py-1 rounded text-xs flex items-center gap-0.5"
                >
                  <FaTags /> {gen}
                </Link>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">
              {movie.description}
            </p>

            {/* Movie Details */}
            <div className="bg-gray-900 p-4 rounded-lg text-sm space-y-2">
              <p>
                <strong>Full Name:</strong> {movie.title}
              </p>
              <p>
                <strong>Language:</strong> Multi Audio
                [Hindi-English-Tamil-Telugu]
              </p>
              <p>
                <strong>Released Year:</strong> {movie.year}
              </p>
              <p>
                <strong>Size:</strong> 450MB | 1GB | 1.2GB | 2.3GB | 2.8GB |
                7.2GB | 10GB | 26GB
              </p>
              <p>
                <strong>Quality:</strong> 480p | 720p | 1080p | 2160p
              </p>
              <p>
                <strong>Source:</strong> WEB-DL
              </p>
              <p>
                <strong>Format:</strong> MKV
              </p>
              <p>
                <strong>Subtitle:</strong> English
              </p>
              <p>
                <strong>Genres:</strong>{" "}
                <span className="flex gap-2">
                  {movie.genres?.map((gen, i) => (
                    <span key={i}>{gen}</span>
                  ))}
                </span>
              </p>
              <p>
                <strong>Cast:</strong>{" "}
                <span>
                  {Array.isArray(movie.celebritie)
                    ? movie.celebritie.join(", ")
                    : movie.celebritie?.name}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">
            Download Links:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {downloadQualities.map((q) => {
              const randomMovie = data[Math.floor(Math.random() * data.length)];

              return (
                <a
                  key={q}
                  href={`/movie/${randomMovie.slug}`}
                  className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded text-center flex items-center justify-center gap-2 text-white font-semibold"
                >
                  <FaDownload /> {q}
                </a>
              );
            })}
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">
            Share This Movie
          </h2>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/share?url=https://yourdomain.com/movie/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 px-4 py-2 rounded text-white flex items-center gap-2"
            >
              <FaShareAlt /> Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://yourdomain.com/movie/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 px-4 py-2 rounded text-white flex items-center gap-2"
            >
              <FaShareAlt /> Facebook
            </a>
          </div>
        </div>

        {/* Storyline & Reaction */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">
            Storyline:
          </h2>
          <p className="text-gray-300 leading-relaxed">{movie.storyline}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-3">
            Personal Reaction
          </h2>
          <p className="text-gray-300 leading-relaxed">{movie.reaction}</p>
        </div>

        <AdBanner slot={3920084541} />

        {movie.trailer && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-green-500 mb-3">
              Watch Trailer
            </h2>
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={convertToEmbedUrl(movie.trailer)}
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

      </div>
        <Recommended/>


    </>
  );
};

export default MovieDetails;

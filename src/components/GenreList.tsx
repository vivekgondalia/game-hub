import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();
  console.log(genres);
  return (
    <ul>
      {genres.map((genre: Genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;

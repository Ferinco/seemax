export const GetMovieGenre = (movie, setGenre) => {
  switch (movie?.genre_id) {
    case "28":
      setGenre("Action");
      break;
    case "16":
      setGenre("Animation");
      break;
    case "12":
      setGenre("Adventure");
      break;
    case "35":
      setGenre("Comedy");
      break;
    case "80":
      setGenre("Crime");
      break;
    case "99":
      setGenre("Documentary");
      break;
    case "18":
      setGenre("Drama");
      break;
    case "10751":
      setGenre("Family");
      break;
    case "14":
      setGenre("Fantansy");
      break;
    case "36":
      setGenre("History");
      break;
    case "27":
      setGenre("Horror");
      break;
    case "10402":
      setGenre("Music");
      break;
    case "878":
      setGenre("Sci-fi");
      break;
    default:
      setGenre("");
  }
};

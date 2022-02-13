import { retrieveMoviesList } from "../services/movies";

async function retrieveAllMovies(params) {
  const res = await retrieveMoviesList(params);
  debugger;
  return await res;
}

export { retrieveAllMovies };
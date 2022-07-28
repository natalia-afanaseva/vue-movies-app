import type { Top250DataDetail } from "@/models/IMovie";
import axios from "axios";

const apiKey = "k_lhxgvv05";

// export const baseUrl = `https://imdb-api.com/en/API/${link}/${apiKey}/`;

export enum MoviesCriteria {
  TOP_250_MOVIES = "Top250Movies",
  TOP_250_SHOWS = "Top250TVs",
  MOST_POPULAR = "MostPopularMovies",
  IN_THEATRES = "InTheatres",
  COMING_SOON = "ComingSoon",
  TITLE = "Title",
}

/*
 { title: "Top-250 Movies", link: "Top250Movies" },
        { title: "Most popular movies", link: "MostPopularMovies" },
        { title: "In theatres", link: "InTheatres" },
        { title: "Coming soon", link: "ComingSoon" },
*/

export const getMovies = async (
  criteria: MoviesCriteria,
  additionalParams = ""
): Promise<any> => {
  try {
    const result = await axios.get(
      `https://imdb-api.com/en/API/${criteria}/${apiKey}/${additionalParams}`
    );
    return result.data;
  } catch (error: any) {
    return error.message;
  }
};

import axios from "axios";

const apiKey = "k_lhxgvv05";

export enum RequestsCriteria {
  TOP_250_MOVIES = "Top250Movies",
  TOP_250_SHOWS = "Top250TVs",
  MOST_POPULAR = "MostPopularMovies",
  IN_THEATRES = "InTheatres",
  COMING_SOON = "ComingSoon",
  TITLE = "Title",
  NAME = "Name",
}

export const getItems = async (
  criteria: RequestsCriteria,
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

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
  SEARCH_MOVIES = "SearchMovie",
  SEARCH_SHOWS = "SearchSeries",
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

export interface SearchResult {
  id: string;
  resultType: string;
  image: string;
  title: string;
  description: string;
}

export const searchItems = async (query: string) => {
  try {
    let result = [] as SearchResult[];

    const movies = await getItems(RequestsCriteria.SEARCH_MOVIES);
    const shows = await getItems(RequestsCriteria.SEARCH_SHOWS);

    result.push(movies);
    result.push(shows);

    return result;
  } catch (error: any) {
    return error.message;
  }
};

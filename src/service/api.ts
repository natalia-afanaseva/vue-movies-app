import { RequestsCriteria } from "@/models/ERequestsCriteria";
import type { SearchResult } from "@/models/ISearchResults";
import axios from "axios";

const SECRET_API_KEY = "";

export const getItems = async (
  criteria: RequestsCriteria,
  additionalParams = ""
): Promise<any> => {
  try {
    const result = await axios.get(
      `https://imdb-api.com/en/API/${criteria}/${SECRET_API_KEY}/${additionalParams}`
    );
    return result.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const searchItems = async (query: string) => {
  try {
    let result = [] as SearchResult[];

    const movies: { results: SearchResult[]; errorMessage: string } =
      await getItems(RequestsCriteria.SEARCH_MOVIES, query);
    if (movies.errorMessage) {
      throw new Error(movies.errorMessage);
    }
    if (movies.results && movies.results.length > 0) {
      result.concat(movies.results);
    }

    const shows: { results: SearchResult[]; errorMessage: string } =
      await getItems(RequestsCriteria.SEARCH_SHOWS, query);
    if (shows.errorMessage) {
      throw new Error(shows.errorMessage);
    }
    if (shows.results && shows.results.length > 0) {
      result.concat(shows.results);
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

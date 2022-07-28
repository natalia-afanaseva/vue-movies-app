<template>
  <article class="row">
    <section>
      <img :src="movie.image" :alt="movie.title" />
    </section>

    <section class="mt-3">
      <h1>{{ movie.title }}</h1>
      <p class="light-grey-text fs-6">
        {{ movie.imDbRating }}
        <span class="red-text fw-bold">{{ movie.runtimeMins }}</span>
      </p>
      <p class="light-grey-text">Release date: {{ movie.releaseDate }}</p>
      <p class="fw-bold">
        Directors: <span class="red-text">{{ movie.stars }}</span>
      </p>
      <p class="light-grey-text">
        Genre: <span>{{ movie.genres }}</span>
      </p>
      <div>
        Cast:
        <ul>
          <li v-for="actor in movie.actorList" :key="actor.id">
            {{ actor.name }}
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { getMovies, MoviesCriteria } from "@/service/api";
import { ref } from "vue";
import type { IMovie } from "@/models/IMovie";

const route = useRoute();
const { movieId } = route.params;

const movie = {
  id: "tt5491994",
  title: "Planet Earth II",
  originalTitle: "",
  fullTitle: "Planet Earth II (TV Series 2016–2016)",
  type: "TVSeries",
  year: "2016",
  image:
    "https://imdb-api.com/images/original/MV5BZWYxODViMGYtMGE2ZC00ZGQ3LThhMWUtYTVkNGE3OWU4NWRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_Ratio0.6751_AL_.jpg",
  releaseDate: "2017-02-18",
  runtimeMins: null,
  runtimeStr: null,
  plot: "David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.",
  plotLocal: "",
  plotLocalIsRtl: false,
  awards:
    "Top rated TV #1 | Won 2 Primetime Emmys, 15 wins & 28 nominations total",
  directors: "",
  directorList: [],
  writers: "",
  writerList: [],
  stars: "David Attenborough, Talha Şentürk, Chadden Hunter",
  starList: [
    {
      id: "nm0041003",
      name: "David Attenborough",
    },
    {
      id: "nm13630863",
      name: "Talha Şentürk",
    },
    {
      id: "nm1769336",
      name: "Chadden Hunter",
    },
  ],
  actorList: [
    {
      id: "nm0041003",
      image:
        "https://imdb-api.com/images/original/MV5BMjMwODQyODk4Nl5BMl5BanBnXkFtZTgwNDEyNjY3NzM@._V1_Ratio1.0000_AL_.jpg",
      name: "David Attenborough",
      asCharacter: "Self - Narrator",
    },
    {
      id: "nm13630863",
      image:
        "https://imdb-api.com/images/original/MV5BZDRmYzc1ZWItNDhiNS00MDM5LWFlY2ItMzI1YWM4ZWI1NjczXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio1.0000_AL_.jpg",
      name: "Talha Şentürk",
      asCharacter: "",
    },
    {
      id: "nm1769336",
      image:
        "https://imdb-api.com/images/original/MV5BMDY2YTRkNzUtOTFhMy00YWU1LWIxYTYtZWI1MTQ4N2M4OWM1XkEyXkFqcGdeQXVyMjI5OTQzNzU@._V1_Ratio1.0000_AL_.jpg",
      name: "Chadden Hunter",
      asCharacter: "Self - Producer",
    },
    {
      id: "nm0118096",
      image:
        "https://imdb-api.com/images/original/MV5BYjBlNzAxMGMtZDA0MC00Yjg4LTlkODEtY2UxY2Q4ZTZiYTVkXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_Ratio1.3429_AL_.jpg",
      name: "Gordon Buchanan",
      asCharacter: "Self - Cameraman",
    },
    {
      id: "nm2357454",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Elizabeth White",
      asCharacter: "Self - Producer",
    },
    {
      id: "nm2139109",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Emma Napper",
      asCharacter: "Self - Producer",
    },
    {
      id: "nm4830788",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Fredi Devas",
      asCharacter: "Self - Producer",
    },
    {
      id: "nm5587234",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Toby Nowlan",
      asCharacter: "Self - Researcher",
    },
    {
      id: "nm0110160",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Barrie Britton",
      asCharacter: "Self - Cameraman",
    },
    {
      id: "nm4095573",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Emma Brennand",
      asCharacter: "Self - Director",
    },
    {
      id: "nm1651642",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Mark MacEwen",
      asCharacter: "Self - Cameraman",
    },
    {
      id: "nm1651645",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Pete McCowen",
      asCharacter: "Self - Cameraman",
    },
    {
      id: "nm3482115",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Ed Charles",
      asCharacter: "Self - Producer",
    },
    {
      id: "nm4776529",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Rob Drewett",
      asCharacter: "Self - Cameraman",
    },
    {
      id: "nm5472684",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Michael J. Sanderson",
      asCharacter: "Self - Drone Operator",
    },
    {
      id: "nm2525988",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Max Hug Williams",
      asCharacter: "Self - Cameraman",
    },
    {
      id: "nm0341545",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Jon Griffith",
      asCharacter: "Self - Cameraman",
    },
    {
      id: "nm8694481",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      name: "Armin Holtze",
      asCharacter: "Self",
    },
  ],
  fullCast: null,
  genres: "Documentary",
  genreList: [
    {
      key: "Documentary",
      value: "Documentary",
    },
  ],
  companies:
    "BBC Natural History Unit (NHU), BBC America, Zweites Deutsches Fernsehen (ZDF)",
  companyList: [
    {
      id: "co0303279",
      name: "BBC Natural History Unit (NHU)",
    },
    {
      id: "co0118334",
      name: "BBC America",
    },
    {
      id: "co0078814",
      name: "Zweites Deutsches Fernsehen (ZDF)",
    },
  ],
  countries: "UK, Germany, France, China, USA",
  countryList: [
    {
      key: "UK",
      value: "UK",
    },
    {
      key: "Germany",
      value: "Germany",
    },
    {
      key: "France",
      value: "France",
    },
    {
      key: "China",
      value: "China",
    },
    {
      key: "USA",
      value: "USA",
    },
  ],
  languages: "English, French",
  languageList: [
    {
      key: "English",
      value: "English",
    },
    {
      key: "French",
      value: "French",
    },
  ],
  contentRating: "TV-G",
  imDbRating: "9.5",
  imDbRatingVotes: "134123",
  metacriticRating: null,
  ratings: null,
  wikipedia: null,
  posters: null,
  images: null,
  trailer: null,
  boxOffice: {
    budget: "",
    openingWeekendUSA: "",
    grossUSA: "",
    cumulativeWorldwideGross: "",
  },
  tagline: null,
  keywords: "nature documentary,mountain,desert,island,nature",
  keywordList: ["nature documentary", "mountain", "desert", "island", "nature"],
  similars: [
    {
      id: "tt0795176",
      title: "Planet Earth",
      image:
        "https://imdb-api.com/images/original/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.4",
    },
    {
      id: "tt6769208",
      title: "Blue Planet II",
      image:
        "https://imdb-api.com/images/original/MV5BYjg2ODk0MjUtNmMzZS00MjY0LWI1YWMtN2JhMjRmZGUwY2I3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7150_AL_.jpg",
      imDbRating: "9.3",
    },
    {
      id: "tt9253866",
      title: "Our Planet",
      image:
        "https://imdb-api.com/images/original/MV5BN2I1ZjA5YjQtYmQ0ZS00ZmE1LTk1ZjktNTQ5ODIzY2JiZDdhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.3",
    },
    {
      id: "tt0296310",
      title: "The Blue Planet",
      image:
        "https://imdb-api.com/images/original/MV5BMjI2NzVhM2UtODZlNS00Nzk1LTk4NDQtYTc0YWU4ODNlNGNjXkEyXkFqcGdeQXVyNjcwMzExMzU@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.0",
    },
    {
      id: "tt0185906",
      title: "Band of Brothers",
      image:
        "https://imdb-api.com/images/original/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.4",
    },
    {
      id: "tt2395695",
      title: "Cosmos: A Spacetime Odyssey",
      image:
        "https://imdb-api.com/images/original/MV5BZTk5OTQyZjYtMDk3Yy00YjhmLWE2MTYtZmY4NTg1YWUzZTQ0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.3",
    },
    {
      id: "tt2092588",
      title: "Frozen Planet",
      image:
        "https://imdb-api.com/images/original/MV5BOGM5YWU2N2QtYjVhZi00MzYyLTk0ODctYmVlNDZlMjU5N2Q5XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_Ratio0.6860_AL_.jpg",
      imDbRating: "9.0",
    },
    {
      id: "tt1533395",
      title: "Life",
      image:
        "https://imdb-api.com/images/original/MV5BNjJhMTAxZjYtNWZkYy00Nzg1LTlkYjItZTNhZWRjNzkxMDg3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7053_AL_.jpg",
      imDbRating: "9.1",
    },
    {
      id: "tt7366338",
      title: "Chernobyl",
      image:
        "https://imdb-api.com/images/original/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.4",
    },
    {
      id: "tt1806234",
      title: "Human Planet",
      image:
        "https://imdb-api.com/images/original/MV5BMjdhZjQzYjYtM2FmNS00Y2ExLThjODEtZGQzY2M3OWYzYzc0XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7053_AL_.jpg",
      imDbRating: "9.0",
    },
    {
      id: "tt0081846",
      title: "Cosmos",
      image:
        "https://imdb-api.com/images/original/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_Ratio0.7150_AL_.jpg",
      imDbRating: "9.3",
    },
    {
      id: "tt0903747",
      title: "Breaking Bad",
      image:
        "https://imdb-api.com/images/original/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_Ratio0.6763_AL_.jpg",
      imDbRating: "9.5",
    },
  ],
  tvSeriesInfo: {
    yearEnd: "2016",
    creators: "Justin Anderson, Ed Charles, Elizabeth White",
    creatorList: [
      {
        id: "nm1565498",
        name: "Justin Anderson",
      },
      {
        id: "nm3482115",
        name: "Ed Charles",
      },
      {
        id: "nm2357454",
        name: "Elizabeth White",
      },
    ],
    seasons: ["1"],
  },
  tvEpisodeInfo: null,
  errorMessage: null,
};

// const movie: IMovie = ref({});

// getMovies(MoviesCriteria.TITLE, movieId as string).then((res) =>
//   console.log(res)
// );
</script>

<style scoped>
section:nth-of-type(odd) {
  background-color: var(--dark-grey);
}

section:nth-of-type(even) {
  color: var(--dark-grey) !important;
}

section:nth-of-type(even) h1,
section:nth-of-type(even) div,
section:nth-of-type(even) ul,
section:nth-of-type(even) p:not(.light-grey-text),
p span {
  color: var(--dark-grey) !important;
}

img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
}
</style>

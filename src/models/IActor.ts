export interface KnownFor {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  role: string;
  image: string;
}

export interface CastMovy {
  id: string;
  role: string;
  title: string;
  year: string;
  description: string;
}

export interface IActor {
  id: string;
  name: string;
  role: string;
  image: string;
  summary: string;
  birthDate?: any;
  deathDate?: any;
  awards: string;
  height: string;
  knownFor: KnownFor[];
  castMovies: CastMovy[];
  errorMessage: string;
}

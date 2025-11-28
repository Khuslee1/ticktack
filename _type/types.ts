export type genre = {
  id: number;
  name: string;
};
export type company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
export type countries = {
  iso_3166_1: string;
  name: string;
};
export type language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
export type response = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: company[];
  production_countries: countries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type credit = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
export type creditObj = {
  id: number;
  cast: credit[];
  crew: credit[];
};
export type vidObj = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
export type video = {
  id: number;
  results: vidObj[];
};
export type resultObj = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type responsSim = {
  dates: { max: string; min: string };
  page: number;
  results: resultObj[];
  totalPages: number;
  totalResults: number;
};

export type responsetit = {
  dates: { max: string; min: string };
  page: number;
  results: resultObj[];
  totalPages: number;
  totalResults: number;
};

export type smallType = {
  title: string;
};

export type CaryDataType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type BumbugProps = {
  CaryData: CaryDataType[];
  current: number;
};

export type genreObj ={ 
genres: allgenre[]
}

export type allgenre = {
        id: number,
      name: string
}
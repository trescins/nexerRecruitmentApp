import { MovieType } from "./movie";
import { TvShow } from "./tvShow";

type CastType = {
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
  character: string;
  credit_id: string;
  order: number;
}

type CrewType = {
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
  department: string;
  credit_id: string;
  job: string;
}

export type CreditsActorType = {
  id: number;
  cast: CastType[],
  crew: CrewType[]
}

export type ActorType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: Array<MovieType | TvShow>;
};

export type ActorDetailsType = ActorType & {
  also_known_as: string[];
  biography: string;
  birthday: Date;
  deathday: Date | null;
  homepage: string;
  imdb_id: string;
  place_of_birth: string;
};

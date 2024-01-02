import { ActorType } from "./actor";
import { MovieType } from "./movie";

export type Results = Partial<MovieType> &
  Partial<ActorType> & {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };

export type SearchResult = {
  page: number;
  results: Results[];
  total_results: number;
  total_pages: number;
};

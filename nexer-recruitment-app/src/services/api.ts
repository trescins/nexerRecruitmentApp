import { API_URL } from "@/const/urls";
import { ActorDetailsType, CreditsActorType } from "@/types/actor";
import { MovieCreditsType, MovieType } from "@/types/movie";
import { ReviewsType } from "@/types/review";
import { SearchResult } from "@/types/searchResult";
import axios from "axios";

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;

export const fetchSearchQuery = async (
  searchQuery: string
): Promise<SearchResult> => {
  const queryUrl = `/search/multi?query=${searchQuery}`;
  const response = await axios.get(`${API_URL.BASE_URL}${queryUrl}`);
  return response.data;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieType> => {
  const queryUrl = `/movie/${movieId}`;
  const response = await axios.get(`${API_URL.BASE_URL}${queryUrl}`);
  return response.data;
};

export const fetchMovieCredits = async (
  movieId: string
): Promise<MovieCreditsType> => {
  const queryUrl = `/movie/${movieId}/credits`;
  const response = await axios.get(`${API_URL.BASE_URL}${queryUrl}`);
  return response.data;
};

export const fetchMovieReviews = async (
  movieId: string
): Promise<ReviewsType> => {
  const queryUrl = `/movie/${movieId}/reviews`;
  const response = await axios.get(`${API_URL.BASE_URL}${queryUrl}`);
  return response.data;
};

export const fetchActorDetails = async (
  actorId: string
): Promise<ActorDetailsType> => {
  const queryUrl = `/person/${actorId}`;
  const response = await axios.get(`${API_URL.BASE_URL}${queryUrl}`);
  return response.data;
};

export const fetchActorCredits = async (
  id: string
): Promise<CreditsActorType> => {
  const queryUrl = `/person/${id}/movie_credits`;
  const response = await axios.get(`${API_URL.BASE_URL}${queryUrl}`);
  return response.data;
};

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Rating, Typography } from "@mui/material";
import { GoToHomepageBtn } from "@/components/GoToHomepageBtn/GoToHomepageBtn";
import { QUERY_KEYS } from "@/const/queryKeys";
import { API_URL } from "@/const/urls";
import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovieReviews,
} from "@/services/api";
import { Reviews } from "@/components/Reviews/Reviews";
import { MovieCreditsCastList } from "@/components/MovieCreditsCastList/MovieCreditsCastList";
import styles from "./Movie.module.scss";

function Movies() {
  const params = useParams();
  const movieId = `${params.id}`;

  const { data: movieDetails } = useQuery({
    queryKey: [QUERY_KEYS.MOVIE],
    queryFn: () => fetchMovieDetails(movieId),
  });

  const { data: movieCredits, refetch: getMovieCredits } = useQuery({
    queryKey: [QUERY_KEYS.MOVIE_CREDITS],
    queryFn: () => fetchMovieCredits(`${movieDetails?.id}`),
    enabled: false,
  });

  const { data: movieReviews, refetch: getMovieReviews } = useQuery({
    queryKey: [QUERY_KEYS.MOVIE_REVIEWS],
    queryFn: () => fetchMovieReviews(`${movieDetails?.id}`),
    enabled: false,
  });

  useEffect(() => {
    if (movieDetails?.id) {
      getMovieCredits();
      getMovieReviews();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieDetails]);

  const getGenres = () => {
    return movieDetails?.genres.map((genre) => `${genre.name}`).join(", ");
  };

  const getReleaseYear = () => {
    const releaseYear = new Date(movieDetails!.release_date).getFullYear();

    return releaseYear;
  };

  if (movieDetails) {
    return (
      <div className={styles.moviePageWrapper}>
        <GoToHomepageBtn />
        <div className={styles.heroWrapper}>
          <img
            src={`${API_URL.IMG_URL_ORIGINAL}/${movieDetails?.backdrop_path}`}
            className={styles.backdropImg}
          />
          <Typography
            className={styles.title}
            gutterBottom
            variant="h5"
            component="h3"
            align="center"
          >
            {`${movieDetails.title} (${getReleaseYear()})`}
          </Typography>
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.posterContent}>
            <img
              src={`${API_URL.IMG_URL}/${movieDetails?.poster_path}`}
              className={styles.posterImg}
            />
            <div className={styles.avgRatingWrapper}>
              <Rating max={1} name="read-only" value={1} readOnly />
              <Typography color="text.secondary" variant="h5" component="label">
                {`${movieDetails.vote_average}`}
              </Typography>
            </div>
            <Typography
              color="text.secondary"
              gutterBottom
              component="p"
              noWrap
            >
              Release date:
              <span
                className={styles.boldText}
              >{`${movieDetails.release_date}`}</span>
            </Typography>
            <Typography
              color="text.secondary"
              gutterBottom
              component="p"
              noWrap
            >
              Genres:
              <span className={styles.boldText}>{getGenres()}</span>
            </Typography>
          </div>
          <Typography
            color="text.secondary"
            component="p"
            align="justify"
            className={styles.overview}
          >
            {movieDetails.overview}
          </Typography>
        </div>
        <Typography
          color="text.secondary"
          gutterBottom
          variant="h5"
          component="h4"
        >
          Rating and reviews:
        </Typography>
        {movieReviews?.results && (
          <Reviews reviewsList={movieReviews.results} />
        )}
        <Typography
          color="text.secondary"
          gutterBottom
          variant="h5"
          component="h4"
        >
          Credits & Cast:
        </Typography>

        {movieCredits?.cast && (
          <MovieCreditsCastList creditsCastList={movieCredits.cast} />
        )}
      </div>
    );
  }

  return null;
}

export default Movies;

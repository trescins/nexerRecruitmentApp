import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { Tile } from "@/components/Tile/Tile";
import { GoToHomepageBtn } from "@/components/GoToHomepageBtn/GoToHomepageBtn";
import { MEDIA_TYPE } from "@/const/mediaType";
import { QUERY_KEYS } from "@/const/queryKeys";
import { API_URL } from "@/const/urls";
import { fetchActorDetails, fetchActorCredits } from "@/services/api";
import { calculateActorAge } from "@/utils/calculateActorAge";
import styles from "./Actor.module.scss";

function Actor() {
  const params = useParams();
  const actorId = `${params.id}`;

  const { data: actorDetails } = useQuery({
    queryKey: [QUERY_KEYS.ACTOR],
    queryFn: () => fetchActorDetails(actorId),
  });

  const { data: credits, refetch: getCredits } = useQuery({
    queryKey: [QUERY_KEYS.ACTOR_CREDITS],
    queryFn: () => fetchActorCredits(`${actorDetails?.id}`),
    enabled: false,
  });

  useEffect(() => {
    if (actorDetails?.id) {
      getCredits();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actorDetails]);

  if (actorDetails) {
    return (
      <div className={styles.actorPageWrapper}>
        <GoToHomepageBtn />
        <img
          src={`${API_URL.IMG_URL}/${actorDetails.profile_path}`}
          className={styles.actorImage}
        />
        <Typography
          color="text.secondary"
          gutterBottom
          variant="h5"
          component="h3"
          noWrap
          align="center"
        >
          {`${actorDetails.name} (${calculateActorAge(actorDetails)})`}
        </Typography>
        <Typography
          color="text.secondary"
          gutterBottom
          variant="body1"
          component="p"
          align="justify"
        >
          {actorDetails.biography}
        </Typography>
        <Typography
          color="text.secondary"
          gutterBottom
          variant="h5"
          component="h4"
        >
          Credits:
        </Typography>
        <div className={styles.moviesWrapper}>
          {credits?.cast?.map((item) => {
            return (
              <div
                className={styles.tileWrapper}
                key={`${item.id}/${item.title}`}
              >
                <Tile
                  imgSrc={item.poster_path}
                  title={item.title}
                  type={MEDIA_TYPE.MOVIE}
                  id={item.id}
                  releaseDate={item.release_date}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export default Actor;

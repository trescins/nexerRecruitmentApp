import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { GoToHomepageBtn } from "@/components/GoToHomepageBtn/GoToHomepageBtn";
import { ActorCreditsCastList } from "@/components/ActorCreditsCastList/ActorCreditsCastList";
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
        {credits?.cast && (
          <ActorCreditsCastList creditsCastList={credits.cast} />
        )}
      </div>
    );
  }

  return null;
}

export default Actor;

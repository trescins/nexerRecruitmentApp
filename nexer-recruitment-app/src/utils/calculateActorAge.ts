import { ActorDetailsType } from "@/types/actor";

const today = new Date();

export const calculateActorAge = (actorDetails: ActorDetailsType) => {
    const birthDate = new Date(actorDetails!.birthday);
    let deathDate = actorDetails?.deathday;
    let actorAge = today.getFullYear() - birthDate.getFullYear();
    let monthsDiff = today.getMonth() - birthDate.getMonth();

    if (deathDate !== null) {
      deathDate = new Date(`${actorDetails!.deathday}`);
      actorAge = deathDate.getFullYear() - birthDate.getFullYear();
      monthsDiff = deathDate.getMonth() - birthDate.getMonth();
    }

    if (
      monthsDiff < 0 ||
      (monthsDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      actorAge--;
    }

    return deathDate !== null ? `${"✝ "} ${actorAge}` : `${actorAge}`;
  };
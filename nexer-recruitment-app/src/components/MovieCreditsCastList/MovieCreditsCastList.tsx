import { MEDIA_TYPE } from "@/const/mediaType";
import { Tile } from "@/components/Tile/Tile";
import { MovieCastType } from "@/types/movie";
import styles from "./MovieCreditsCastList.module.scss";

type CreditsCastListProps = {
  creditsCastList: MovieCastType[];
};

export const MovieCreditsCastList = ({ creditsCastList }: CreditsCastListProps) => {
  return (
    <div className={styles.actorsWrapper}>
      {creditsCastList.map((item) => {
        return (
          <div className={styles.tileWrapper} key={`${item.id}/${item.name}`}>
            <Tile
              imgSrc={item.profile_path}
              id={item.id}
              character={item.character}
              actorName={item.name}
              type={MEDIA_TYPE.PERSON}
            />
          </div>
        );
      })}
      ;
    </div>
  );
};

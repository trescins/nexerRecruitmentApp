import { MEDIA_TYPE } from "@/const/mediaType";
import { CastType } from "@/types/actor";
import { Tile } from "@/components/Tile/Tile";
import styles from "./ActorCreditsCastList.module.scss";

type ActorCreditsCastListProps = {
    creditsCastList: CastType[]
};

export const ActorCreditsCastList = ({ creditsCastList }: ActorCreditsCastListProps) => {
  return (
    <div className={styles.moviesWrapper}>
      {creditsCastList.map((item) => {
        return (
          <div className={styles.tileWrapper} key={`${item.id}/${item.title}`}>
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
      ;
    </div>
  );
};

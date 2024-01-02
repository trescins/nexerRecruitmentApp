import { Tile } from "@/components/Tile/Tile";
import styles from "./Tiles.module.scss";
import { SearchResult } from "@/types/searchResult";
import { MEDIA_TYPE } from "@/const/mediaType";

type TilesProps = {
  searchResults: SearchResult;
};

export const Tiles = ({ searchResults }: TilesProps) => {
  const results = searchResults.results;

  return (
    <div className={styles.wrapper}>
      {results?.map((result) => {
        return (
          <Tile
            id={result?.id}
            key={result?.id}
            imgSrc={
              result?.media_type === MEDIA_TYPE.PERSON
                ? result.profile_path
                : result.poster_path
            }
            title={`${
              result?.media_type === MEDIA_TYPE.PERSON ||
              result?.media_type === MEDIA_TYPE.TV
                ? result?.name
                : result?.title
            }`}
            type={result?.media_type}
          />
        );
      })}
    </div>
  );
};

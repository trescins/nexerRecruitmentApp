import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import { API_URL } from "@/const/urls";
import type { TileType } from "@/types/tile";
import { MEDIA_TYPE } from "@/const/mediaType";

type TileProps = TileType;

export const Tile = ({
  imgSrc,
  title,
  type,
  id,
  releaseDate,
  character,
  actorName,
}: TileProps) => {
  const navigate = useNavigate();

  const imgUrl = `${API_URL.IMG_URL}${imgSrc}`;
  const isActor = type === MEDIA_TYPE.PERSON;

  return (
    <Card sx={{ width: 220, minWidth: 220, overflow: "visible", textAlign: 'center' }}>
      <CardActionArea
        onClick={() => navigate(isActor ? `/actor/${id}` : `/movie/${id}`)}
      >
        {imgSrc ? (
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="220"
            image={imgUrl}
            alt={`${title}, ${type}`}
          />
        ) : (
          <ImageNotSupportedIcon
            sx={{ fontSize: 92, height: 220 }}
          />
        )}

        <CardContent>
          {title && (
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              noWrap
              align="center"
            >
              {title}
            </Typography>
          )}
          {actorName && (
            <Typography
              variant="body2"
              gutterBottom
              noWrap
              align="center"
              color="text.secondary"
            >
              {actorName}
            </Typography>
          )}
          {!actorName && type && (
            <Typography
              variant="body2"
              color="text.secondary"
              noWrap
              align="center"
            >
              {type}
            </Typography>
          )}
          {releaseDate && (
            <Typography variant="body2" noWrap align="center">
              {releaseDate}
            </Typography>
          )}
          {character && (
            <Typography variant="body2" noWrap align="center">
              {character}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

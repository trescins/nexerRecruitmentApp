import { Paper, Rating, Typography } from "@mui/material";
import styles from "./Review.module.scss";

type ReviewProps = {
  content: string;
  updated_at: string;
  author: string;
  rating: number;
};

export const Review = ({
  content,
  updated_at,
  author,
  rating,
}: ReviewProps) => {
  const reviewDate = new Date(updated_at).toDateString();
  return (
    <Paper elevation={12} className={styles.wrapper}>
      <Typography variant="h6" noWrap align="justify">
        {author}
      </Typography>
      <Typography variant="body2" gutterBottom noWrap color="text.secondary">
        {reviewDate}
      </Typography>
      <Typography component="legend">{`${rating}/10`}</Typography>
      <Rating max={10} name="review-rating" value={rating} readOnly />
      <Typography
        variant="body2"
        align="justify"
        className={styles.contentParagraph}
      >
        {content}
      </Typography>
    </Paper>
  );
};

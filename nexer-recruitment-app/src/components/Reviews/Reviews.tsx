import { ReviewType } from "@/types/review";
import { Review } from "@/components/Review/Review";
import styles from "./Reviews.module.scss";

type ReviewsProps = {
  reviewsList: ReviewType[];
};

export const Reviews = ({ reviewsList }: ReviewsProps) => {
  return (
    <div className={styles.reviewsWrapper}>
      {reviewsList.map((item) => {
        return (
          <Review
            key={`${item.id}/${item.author}`}
            content={item.content}
            updated_at={item.updated_at}
            author={item.author}
            rating={item.author_details.rating}
          />
        );
      })}
    </div>
  );
};

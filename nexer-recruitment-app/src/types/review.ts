type AuthorDetails = {
  avatar_path: string;
  name: string;
  rating: number;
  username: string;
};

export type ReviewType = {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type ReviewsType = {
  id: number;
  page: number;
  results: ReviewType[],
  total_pages: number;
  total_results: number;
}

import { TextField } from "@mui/material";
import styles from "./Search.module.scss";

type SearchProps = {
  onChangeHandler: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ onChangeHandler }: SearchProps) => {
  return (
    <TextField
      className={styles.wrapper}
      variant="filled"
      onChange={(e) => onChangeHandler(e.target.value)}
      label="Search Movies or Actors"
    />
  );
};

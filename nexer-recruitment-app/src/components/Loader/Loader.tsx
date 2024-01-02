import { Backdrop, CircularProgress } from "@mui/material";
import { useIsFetching } from "@tanstack/react-query";
import styles from "./Loader.module.scss";

function Loader() {
  const isFetching = useIsFetching();

  if (isFetching) {
    return (
      <div className={styles.loaderWrapper}>
        <Backdrop
          sx={{ color: "#fff", zIndex: 999999 }}
          open={true}
        >
          <CircularProgress color="inherit"/>
        </Backdrop>
      </div>
    );
  }

  return null;
}

export default Loader;

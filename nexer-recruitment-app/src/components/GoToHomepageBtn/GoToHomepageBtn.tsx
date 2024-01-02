import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const GoToHomepageBtn = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/")}>Back to Homepage</Button>;
}

import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const LoggedInUser = () => {
  const { user } = useUser();
  const { theme } = useTheme();
  return (
    <p style={{ color: theme === "light" ? "black" : "white" }}>
      Hello <span className="username">{user.name}</span>{" "}
    </p>
  );
};

export default LoggedInUser;

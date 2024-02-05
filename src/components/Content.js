import { useTheme } from "../context/ThemeContext";

const Content = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div style={{ color: theme === "light" ? "black" : "white" }}>
      {children}
    </div>
  );
};

export default Content;

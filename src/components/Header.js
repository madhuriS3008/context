import Title from "./Title";
import LoggedInUser from "./LoggedInUser";
import Switch from "./Switch";

const Header = () => {
  return (
    <header>
      <Title>Blog App</Title>
      <LoggedInUser />
      <Switch />
    </header>
  );
};

export default Header;

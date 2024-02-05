import { useUser } from "../context/UserContext";
import Content from "./Content";
import Title from "./Title";

const Page = () => {
  const { user } = useUser();
  return (
    <div className="page">
      <Title>What is Lorem ipsum?</Title>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Written by {user.name}</p>
      </Content>
    </div>
  );
};

export default Page;

import { Link } from "react-router-dom";
import authStore from "../stores/authStore";
// import SignUpHook from "./SignUpHook";
import logo from "../briefcase.gif";
import {
  HomeStyling,
  HomeGif,
  Title,
  TreasureHeader,
  FreeJokeImage,
  FreeJokeHeader,
} from "../styles";

const Home = () => {
  return (
    <>
      <Title>Welcome to Dad Jokes</Title>
      <h4 style={{ textAlign: "center", padding: "5px", margin: "30px" }}>
        Check out our random dad jokes. Did you handle them well? If so, we have
        a treasure chest just for you. All you gottta do is just sign up and
        your treasure will appear. Remember, you asked for it.
      </h4>
      <div>
        <HomeStyling>
          <Link to="/things/random">
            <FreeJokeImage
              src="https://ci.memecdn.com/9575145.jpg"
              alt="free"
            />
            <FreeJokeHeader>Free Jokes</FreeJokeHeader>
          </Link>
          <Link to="/things/treasure" style={{ color: "gold" }}>
            {authStore.user ? (
              <div>
                <HomeGif src={logo} alt="loading..." />
                <TreasureHeader>Do you really wanna see it?</TreasureHeader>
              </div>
            ) : null}
          </Link>
        </HomeStyling>
      </div>
    </>
  );
};

export default Home;

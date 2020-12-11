import { Link } from "react-router-dom";
import authStore from "../stores/authStore";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Dad Jokes Treasure Hunt</h1>
      <Link to="/things/random">
        <button>Random Jokes</button>
      </Link>
      <Link to="/things/treasure">
        {authStore.user ? <button>Treasure</button> : null}
      </Link>
    </div>
  );
};

export default Home;

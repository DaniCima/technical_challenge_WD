import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>The Phone Cave</h1>

      <Link to="/phones">Check them</Link>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";
import "../App.css";
const Home = () => {
  return (
    <div className="bg-Himg relative">
      <Link to="/menu">
        <button className="bg-red-600 text-white shadow-black shadow-2xl px-4 py-2 rounded-xl absolute bottom-0 m-10 hover:bg-red-700">
          Order!
        </button>
      </Link>
    </div>
  );
};

export default Home;
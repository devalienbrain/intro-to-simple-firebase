import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"}>
      <div className="p-4 bg-black text-white text-4xl font-black text-center flex justify-center align-middle items-center">
        <h1>React Simple Firebase Authentication</h1>
      </div>
    </Link>
  );
};

export default Header;

import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h4>Login with Google</h4>
        <button
          onClick={handleGoogleLogin}
          className="my-7 px-5 py-2 border border-black hover:bg-black hover:text-white font-semibold rounded"
        >
          Click to login
        </button>
      </div>

      <div className="py-5 gap-4">
        {user && (
          <div className="text-center flex flex-col justify-center  items-center">
            <h3>User: {user.displayName}</h3>
            <p className="text-xs">Email: {user.email}</p>
            <img
              className="flex justify-center align-middle items-center border border-red-600"
              src={user.photoURL}
              alt=""
            />
          </div>
        )}
      </div>
      {user && (
        <div>
          <button
            onClick={handleGoogleLogOut}
            className="my-7 px-5 py-2 bg-red-600 text-white hover:bg-red-500 rounded"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};
export default Login;

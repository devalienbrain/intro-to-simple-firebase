import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center align-middle items-center">
      <div>
        <h4>Login with Google</h4>
        <button
          onClick={handleGoogleLogin}
          className="my-7 px-5 py-2 bg-black text-blue-200 hover:text-white rounded"
        >
          Click to login
        </button>
      </div>
    </div>
  );
};

export default Login;


import { useNavigate } from "react-router-dom";
import { signInWithGoogle, logOut, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SignUpForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/app");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">
              Welcome, {user.displayName}
            </h2>
            <button
              onClick={handleLogOut}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="**********"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleSignIn}
                >
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;

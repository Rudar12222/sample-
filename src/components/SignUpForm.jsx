
import { signInWithGoogle } from "../firebase";

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-6">
          <button className="bg-black text-white py-2 px-4 rounded-l-md focus:outline-none">
            Sign up
          </button>
          <button className="bg-gray-300 text-black py-2 px-4 rounded-r-md focus:outline-none">
            Log in
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
        <div className="flex flex-col items-center mb-4">
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-2 w-full flex items-center justify-center"
          >
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="Facebook"
              className="w-6 h-6 mr-2"
            />
            Sign up with Facebook
          </button>
          <button
            type="button"
            className="bg-white text-black font-bold py-2 px-4 rounded border border-gray-300 w-full flex items-center justify-center"
            onClick={signInWithGoogle}
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Sign up with Google
          </button>
        </div>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <form>
          <div className="flex mb-4">
            <div className="mr-2 w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First name"
              />
            </div>
            <div className="ml-2 w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email address"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-black font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

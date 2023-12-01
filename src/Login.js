import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="logo"
      />
      <form className="absolute p-4 w-3/12 bg-black mt-24 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold p-2 text-xl">
          {isSignInForm ? "Login" : "Create New Account"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="mt-6 p-2 w-full bg-gray-800"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="mt-6 p-2 w-full bg-gray-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="mt-6 p-2 w-full bg-gray-800"
        />

        <input
          type="submit"
          value={isSignInForm ? "Sign In" : "Create"}
          className="bg-red-700 text-bold w-full mt-8 p-2 rounded-md"
        />
        <div className="p-10">
          <p onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Register Now"
              : "Already have account? Login"}
          </p>
        </div>
      </form>
    </div>
    
  );
};

export default Login;

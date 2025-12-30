import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import LoginValidation from "../utils/LoginValidation";
import { useNavigate } from "react-router";
import { LoginContext } from "../components/context/createContext";

function Login() {
  const [loginData, setLoginData] = useState({
    userCredential: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const [loginError, setLoginError] = useState();
  const [allFormData, setAllFormData] = useState(null);

  useEffect(() => {
    let allForms = JSON.parse(localStorage.getItem("forms"));
    setAllFormData(allForms);
  }, []);

  const handleChange = (e) => {
    const { value, id } = e.target;
    setLoginData((pre) => ({ ...pre, [id]: value }));
  };

  const handleLogin = () => {
    const result = LoginValidation(loginData, setLoginError, allFormData);
    if (result.success) {
      login(result.user);
      navigate("/");
      return;
    }
    setLoginError(result.err);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-linear-to-br from-gray-100 to-gray-200">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Welcome Back 👋
      </h1>

      <div className="w-4/12 max-lg:w-6/12 max-sm:w-8/12 max-sm30:w-10/12 max-sm22:w-12/12 bg-white rounded-xl shadow-lg p-8 flex flex-col gap-y-5">
        <div>
          <input
            type="text"
            placeholder="Email or Username"
            id="userCredential"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 
                   focus:outline-none focus:ring-2 focus:ring-red-400 
                   focus:border-red-400 transition"
          />
        </div>

        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 
                   focus:outline-none focus:ring-2 focus:ring-red-400 
                   focus:border-red-400 transition"
          />
        </div>

        <div className="text-center min-h-[20px]">
          <span className="text-sm text-red-500 font-medium">
            {loginError && loginError}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="bg-red-500 hover:bg-red-600 active:scale-95 
                 text-white font-semibold py-3 px-6 
                 rounded-lg transition-all duration-200 
                 shadow-md w-full"
        >
          Login
        </button>

        <div className="text-center text-sm text-gray-600 mt-2">
          Don&apos;t have an account?{" "}
          <span className="font-semibold text-blue-600 hover:underline cursor-pointer">
            <Link to={"/signin"}>Register Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;

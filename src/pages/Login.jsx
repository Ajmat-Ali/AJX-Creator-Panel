import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import LoginValidation from "../config/LoginValidation";
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
    <div className=" h-screen flex flex-col justify-center items-center ">
      <h1>Login Page</h1>
      <div className="border border-red-500 w-4/12 m-auto p-4 flex flex-col gap-y-5 pt-10 max-lg:w-6/12 max-sm:w-8/12 max-sm30:w-10/12 max-sm22:w-12/12">
        <div>
          <input
            type="text"
            placeholder="Email or User-Name "
            id="userCredential"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-md px-4 py-2 "
          />
        </div>
        <div className="text-center">
          {" "}
          <span className="text-red-500 font-sm">
            {loginError && loginError}
          </span>
        </div>
        <button
          onClick={handleLogin}
          className="bg-red-500 text-white cursor-pointer py-2 px-4 w-fit m-auto rounded-lg"
        >
          Login
        </button>
        <div className="text-center m-2">
          Don't have account?{" "}
          <span className="font-bold text-blue-500 cursor-pointer">
            <Link to={"/signin"}>Register Here</Link>
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;

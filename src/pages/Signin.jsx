import { useEffect, useReducer, useState } from "react";

// --------------------------------------------------------------- Local Component Import -------------------
import Step1Account from "../components/steps/Step1Account";
import Step2Profile from "../components/steps/Step2Profile";
import Step3Preference from "../components/steps/Step3Preference";
import Review from "../components/steps/Review";

// --------------------------------------------------------------- Configuration Form Component -------------------
import ConfigFormComponent from "../utils/ConfigFormComponent";
import { reducer, initialValue } from "../utils/RegisterReducer";
import { Link, Links } from "react-router";

function Signin() {
  const [err, setErr] = useState({});
  const [storedUsers, setStoredUsers] = useState(null);
  const [formData, dispatch] = useReducer(reducer, initialValue);
  const { step } = formData;

  useEffect(() => {
    let allForms = JSON.parse(localStorage.getItem("forms"));
    setStoredUsers(allForms);
  }, []);

  const configStep = ConfigFormComponent(formData, setErr, storedUsers);
  const ActiveStep = configStep[step].component;
  const validate = configStep[step].validate;

  const handleNextStep = () => {
    if (validate()) {
      dispatch({
        type: "NEXT",
        data: step,
      });
    }
  };

  const handleBackStep = () => {
    dispatch({
      type: "BACK",
      data: step,
    });
  };

  function handleSubmit() {
    let existingForm = JSON.parse(localStorage.getItem("forms")) || [];
    let updated = [...existingForm, formData];

    localStorage.setItem("forms", JSON.stringify(updated));
    alert("Account Created successfully" + " " + formData.account.firstName);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Create Account
        <span className="block text-sm font-normal text-gray-500 mt-1">
          Step {step + 1} of {configStep.length}
        </span>
      </h1>

      <div>
        <ActiveStep dispatch={dispatch} formData={formData} err={err} />

        <div className="flex justify-center gap-6 my-10">
          <button
            className={`px-6 py-2 rounded-lg font-medium bg-gray-300 text-gray-700 hover:bg-gray-400 transition ${
              step === 0 ? "hidden" : "block"
            }`}
            onClick={() => handleBackStep("BACK")}
          >
            Back
          </button>

          <button
            className={`px-6 py-2 rounded-lg font-medium bg-green-500 text-white hover:bg-green-600 transition ${
              step >= configStep.length - 1 ? "hidden" : "block"
            }`}
            onClick={() => handleNextStep("NEXT")}
          >
            Next
          </button>

          <Link to="/">
            <button
              className={`px-6 py-2 rounded-lg font-medium bg-red-500 text-white hover:bg-red-600 transition ${
                step === configStep.length - 1 ? "block" : "hidden"
              }`}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;

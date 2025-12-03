import { useReducer, useState } from "react";

// --------------------------------------------------------------- Local Component Import -------------------
import Step1Account from "../components/steps/Step1Account";
import Step2Profile from "../components/steps/Step2Profile";
import Step3Preference from "../components/steps/Step3Preference";
import Review from "../components/steps/Review";

// --------------------------------------------------------------- Configuration Form Component -------------------
import ConfigFormComponent from "../config/ConfigFormComponent";
import { reducer, initialValue } from "../config/RegisterReducer";
import { Link, Links } from "react-router";

function Signin() {
  const [err, setErr] = useState({});
  const [formData, dispatch] = useReducer(reducer, initialValue);
  const { step } = formData;

  const configStep = ConfigFormComponent(formData, setErr);

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
    localStorage.setItem("form", JSON.stringify(formData));
    alert("Form Submitted successfully" + " " + formData.account.firstName);
  }

  return (
    <div className="p-2">
      <h1 className="text-2xl m-4 text-center mb-6">
        Signing Page -- Step: {step}
      </h1>
      <div className=" border border-black w-4/12 m-auto py-0 px-6 | max-xl:w-6/12 | max-md:w-8/12 | max-sm:w-7/12 max-sm30:w-9/12 max-sm22:w-12/12  max-sm22:px-2">
        <ActiveStep dispatch={dispatch} formData={formData} err={err} />
        <div className="flex justify-center gap-7 my-8">
          <button
            className={`cursor-pointer px-4 py-1 rounded-[5px] bg-blue-600 text-white ${
              step === 0 ? "hidden" : "block"
            }`}
            onClick={() => handleBackStep("BACK")}
          >
            Back
          </button>
          <button
            className={`cursor-pointer px-4 py-1 rounded-[5px] bg-green-500 text-white ${
              step >= configStep.length - 1 ? "hidden" : "block"
            }`}
            onClick={() => handleNextStep("NEXT")}
          >
            Next
          </button>
          <Link to="/">
            <button
              className={`cursor-pointer px-4 py-1 rounded-[5px] bg-red-600 text-white ${
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

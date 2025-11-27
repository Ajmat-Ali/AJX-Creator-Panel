import { useReducer, useState } from "react";

// --------------------------------------------------------------- Local Component Import -------------------
import Step1Account from "../components/steps/Step1Account";
import Step2Profile from "../components/steps/Step2Profile";
import Step3Preference from "../components/steps/Step3Preference";
import Review from "../components/steps/Review";

// --------------------------------------------------------------- Configuration Form Component -------------------
import ConfigFormComponent from "../config/ConfigFormComponent";
import { reducer, initialValue } from "../config/RegisterReducer";

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

  return (
    <div className=" border-4 border-red-600 ">
      <h1 className="text-2xl m-8">Signing Page -- Step: {step}</h1>
      <h2>{formData.currentStep}</h2>
      <div className="border-2 border-green-600 w-4/12 m-auto flex flex-col justify-between py-8 px-6">
        <ActiveStep dispatch={dispatch} formData={formData} err={err} />
        <div className="flex justify-center gap-7 mt-4">
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
          <button
            className={`cursor-pointer px-4 py-1 rounded-[5px] bg-red-600 text-white ${
              step === configStep.length - 1 ? "block" : "hidden"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;

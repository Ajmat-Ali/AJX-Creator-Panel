import { useReducer, useState } from "react";
import Step1Account from "../components/steps/Step1Account";
import Step2Profile from "../components/steps/Step2Profile";
import Step3Preference from "../components/steps/Step3Preference";
import Review from "../components/steps/Review";

const initialValue = {
  currentStep: 0,
  account: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  profile: {
    userName: "",
    phoneNumber: "",
    bio: "",
    avatar: "",
  },
  preference: {
    contentGoal: "",
    experience: "beginner",
    weeklyPostingGoal: "1",
  },
};

const reducer = (state, { type, data }) => {
  switch (type) {
    case "BACK": {
      return { ...state, currentStep: data - 1 };
    }
    case "NEXT": {
      return { ...state, currentStep: data + 1 };
    }
    case "ACCOUNT": {
      return { ...state, ...state.account };
    }
    case "PROFILE": {
      return { ...state, ...state.profile };
    }
    case "PREFERENCE": {
      return { ...state, ...state.preference };
    }
    default: {
      throw Error("Unknown action: " + type);
    }
  }
};

function Signin() {
  const [formData, dispatch] = useReducer(reducer, initialValue);

  const [step, setStep] = useState(0);
  const formSteps = [
    { name: "Step1Account", component: Step1Account },
    { name: "Step2Profile", component: Step2Profile },
    { name: "Step3Preference", component: Step3Preference },
    { name: "Review", component: Review },
  ];

  const handleStep = (text) => {
    if (text === "BACK") {
      setStep((pre) => pre - 1);
    } else {
      setStep((pre) => pre + 1);
    }
    dispatch({
      type: text,
      data: step,
    });
  };

  const ActiveStep = formSteps[step].component;
  return (
    <div className=" border-4 border-red-600 ">
      <h1 className="text-2xl m-8">Signing Page -- Step: {step}</h1>
      <h2>{formData.currentStep}</h2>
      <div className="border-2 border-green-600 w-4/12 m-auto flex flex-col justify-between py-8 px-6">
        <ActiveStep />
        <div className="flex justify-center gap-7 mt-4">
          <button
            className={`cursor-pointer px-4 py-1 rounded-[5px] bg-blue-600 text-white ${
              step === 0 ? "hidden" : "block"
            }`}
            onClick={() => handleStep("BACK")}
          >
            Back
          </button>
          <button
            className={`cursor-pointer px-4 py-1 rounded-[5px] bg-green-500 text-white ${
              step >= formSteps.length - 1 ? "hidden" : "block"
            }`}
            onClick={() => handleStep("NEXT")}
          >
            Next
          </button>
          <button
            className={`cursor-pointer px-4 py-1 rounded-[5px] bg-red-600 text-white ${
              step === formSteps.length - 1 ? "block" : "hidden"
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

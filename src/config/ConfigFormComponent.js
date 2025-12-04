import Step1Account from "../components/steps/Step1Account";
import Step2Profile from "../components/steps/Step2Profile";
import Step3Preference from "../components/steps/Step3Preference";
import Review from "../components/steps/Review";
const FormComponent = (formData, setErr, allFormData) => {
  const {
    account: { firstName, lastName, email, password, confirmPassword, privacy },
    profile: { userName, phone, bio, avatar },
  } = formData;

  let checkDuplicate = allFormData?.flatMap((form) => [
    form.account.email,
    form.profile.userName,
    form.profile.phone,
  ]);

  const configStep = [
    {
      name: "Step1Account",
      component: Step1Account,
      validate: () => {
        const newErr = {};

        if (!firstName || firstName.length < 3) {
          newErr.firstName = "First Name is not valid";
        }
        if (!lastName || lastName.length < 2) {
          newErr.lastName = "Last Name is not valid";
        }
        if (!email || email.length < 4) {
          newErr.email = "Email is not valid";
        }

        if (checkDuplicate.includes(email)) {
          newErr.email = "Email already exist";
        }

        if (!password || password.length < 5) {
          newErr.password = "Password must be at least 5 character";
        }
        if (password !== confirmPassword) {
          newErr.confirmPassword = "Please Enter correct password";
        }
        if (privacy === false) {
          newErr.privacy = "Please Accept T&C";
        }
        setErr(newErr);

        return newErr.firstName ||
          newErr.lastName ||
          newErr.email ||
          newErr.password ||
          newErr.confirmPassword ||
          newErr.privacy
          ? false
          : true;
      },
    },
    {
      name: "Step2Profile",
      component: Step2Profile,
      validate: () => {
        const newErr = {};

        if (!userName || userName.length < 3) {
          newErr.userName = "User Name is required with min 3 character";
        }

        if (checkDuplicate.includes(userName)) {
          newErr.userName = "User Name is already used";
        }

        if (!phone || phone.length < 10) {
          newErr.phone = "Phone is not valid";
        }

        if (checkDuplicate.includes(phone)) {
          newErr.phone = "Phone no. already exist";
        }
        setErr(newErr);
        return newErr.userName || newErr.phone ? false : true;
      },
    },
    {
      name: "Step3Preference",
      component: Step3Preference,
      validate: () => {
        return true;
      },
    },
    { name: "Review", component: Review },
  ];
  return configStep;
};

export default FormComponent;

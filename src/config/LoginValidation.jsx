export default function LoginValidation(loginData, setLoginError, allFormData) {
  const { userCredential, password } = loginData;

  const formsCredentials = allFormData?.flatMap((form) => [
    form.account.email,
    form.profile.userName,
    form.account.password,
  ]);

  const loginCheck = {
    validation: () => {
      const err = {};
      if (
        !formsCredentials.includes(userCredential) ||
        !formsCredentials.includes(password)
      ) {
        err.userCredential = "Invalid user's Credential";
      }
      setLoginError(err);
      return err.userCredential ? true : false;
    },
  };

  return loginCheck;
}

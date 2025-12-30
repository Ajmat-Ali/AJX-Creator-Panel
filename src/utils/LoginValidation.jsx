export default function LoginValidation(loginData, setLoginError, allFormData) {
  const { userCredential, password } = loginData;

  const foundUser = allFormData?.find((user) => {
    return (
      (user.account.email === userCredential ||
        user.profile.userName === userCredential) &&
      user.account.password === password
    );
  });

  if (!foundUser) {
    return {
      success: false,
      err: "Invalid user's Credential",
      user: null,
    };
  }

  return {
    success: true,
    err: "",
    user: foundUser,
  };
}

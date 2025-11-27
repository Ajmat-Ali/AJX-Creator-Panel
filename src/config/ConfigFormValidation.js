// function configFormValidation(formData, setErr, step) {
//   const {
//     account: { firstName, lastName, email, password, confirmPassword, privacy },
//     profile: { userName, phone, bio, avatar },
//   } = formData;
//   const newErr = {};
//   if (!userName || userName.length < 3) {
//     newErr.userName = "Invalid UserName, Required min 3 Char";
//   }
//   setErr(newErr);
//   return newErr.userName ? false : true;
// }

// export default configFormValidation;

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                                                       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\                                                        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ Extract Validation Function outside from `configStep` \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

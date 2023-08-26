export const checkValidateData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid && !isPasswordValid)
    return "Email and Password is not Valid!";
  else if (!isEmailValid) return "Email is not Valid!";
  else if (!isPasswordValid) return "Password is not Valid!";
};

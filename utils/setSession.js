export const setSessionStorage = (token) => {
  console.log(token);
  if (sessionStorage.getItem("token")) {
    return "have there value";
  } else {
    sessionStorage.setItem("token", token);
  }
};

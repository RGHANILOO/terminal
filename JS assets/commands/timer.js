// /function for time element of the terminal

export const formattedDate = () => {
  const date = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  // String.prototype.replace() // Tue 16 Jan,23:21:51
  return date.toLocaleDateString("en-GB", options).replaceAll(", ", " ");
};
const lastLoginTime = document.querySelector("#last-login-time");
lastLoginTime.textContent = formattedDate();

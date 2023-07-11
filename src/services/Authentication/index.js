import { LOGIN_URL } from "../../urls";

export const login = async (userBody)=>{
  const {username, password } = userBody;
  return await fetch(`${LOGIN_URL}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then((data) => {
      // Handle the response from the server
      return data;
    })
    .catch((error) => {
      // Handle any errors
      return null;
    });
}
import { backHost as host } from "../environment/env";

function signInApi(payload) {
  const link = "/api/sign-in";

  let url = `${host}${link}`;
  let body = payload;

  body = JSON.stringify(body);

  let options = {
    method: "POST",
    body: body,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      accept: "application/json",
    },
  };

  return fetch(`${url}`, options);
}

export default signInApi;

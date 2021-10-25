import { API_CONFIG } from "Config";

export default function ApiRequest(Method, Path, options = {}) {
  let Base_url = API_CONFIG.BASE_URL;
  let fetchOptions = {
    method: Method,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
  };

  if (options && options.isAuthenticated === false) {
    fetchOptions.headers["x-w3dev-token"] = `${options.token}`;
  }

  if (Method === "POST" || Method === "PUT") {
    fetchOptions.body = JSON.stringify(options.body);
  }

  return fetch(`${Base_url}/${Path}`, fetchOptions).then((res) => res.json());
}

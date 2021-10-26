import { BASE_URL } from "../constants";
import { SaveInfo, YamlObj } from "../types";

function post(url: string, data: any) {
  return fetch(`${BASE_URL}/${url}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    body: Object.keys(data)
      .map((item) => `${item}=${data[item]}`)
      .join("&"),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  });
}

export const saveConfig = async (data: SaveInfo) => {
  return (await post("config-save", data)).json();
};

export const queryConfig = async (data: SaveInfo): Promise<YamlObj> => {
  return (await post("config-get", data)).json();
};

export { post };

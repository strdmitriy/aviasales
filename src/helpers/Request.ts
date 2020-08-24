import axios from "axios";

const METHODS: any = {
  get: axios.get
};

export const request = (method: string, api: string) => {
  const basePath = "https://front-test.beta.aviasales.ru";
  return METHODS[method](`${basePath}${api}`);
};

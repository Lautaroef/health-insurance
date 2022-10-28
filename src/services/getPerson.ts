import { BASE_API } from "constants/api.constants";

export const getPerson = async () => {
  const response = await fetch(`${BASE_API}/dummy/obtenerdatospersona`, {
    method: "post",
    body: JSON.stringify({}),
  });
  if (response.ok) {
    const {
      data: { tercero },
    } = await response.json();
    return tercero;
  }
  return null;
};

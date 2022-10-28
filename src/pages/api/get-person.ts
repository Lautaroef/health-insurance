// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BASE_API } from "constants/api.constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res;
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
}

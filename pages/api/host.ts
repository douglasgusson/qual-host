import { lookup, reverse } from "dns";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const domain = req.body.domain;

  lookup(domain, (err, address) => {
    if (err) {
      res.status(500).json({
        message: "Não foi possível encontrar o servidor",
        detail: err.message,
      });
    } else {
      reverse(address, (err, hostnames) => {
        if (err) {
          res.status(500).json({
            message: "Não foi possível encontrar o servidor",
            detail: err.message,
          });
        } else {
          res.status(200).json({ address, domain, hostnames });
        }
      });
    }
  });
}

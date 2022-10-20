import { lookup, reverse } from "dns";
import type { NextApiRequest, NextApiResponse } from "next";
import { ServerInfo } from "../../types/server-info";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ServerInfo>
) {
  const domain = req.body.domain;

  const { address, family } = await new Promise<{
    address: string;
    family: number;
  }>((resolve, reject) => {
    lookup(domain, (err, address, family) => {
      if (err) reject(err);
      resolve({ address, family });
    });
  }).catch(() => ({
    address: "Not found",
    family: 0,
  }));

  const hostnames = await new Promise<string[]>((resolve, reject) => {
    reverse(address, (err, hostnames) => {
      if (err) reject(err);
      resolve(hostnames);
    });
  }).catch(() => []);

  res.status(200).json({
    domain,
    family,
    address,
    hostnames,
  });
}

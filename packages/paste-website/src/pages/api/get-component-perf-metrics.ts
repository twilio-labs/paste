import type { NextApiResponse } from "next";

export default function handler(res: NextApiResponse): void {
  res.status(200).json({ name: "John Doe" });
}

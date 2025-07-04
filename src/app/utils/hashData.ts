import crypto from "crypto";

export const hashData = (data: string) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

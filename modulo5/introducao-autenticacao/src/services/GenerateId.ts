import { v4 } from "uuid";

export function GenerateId(): string {
    return v4();
  }
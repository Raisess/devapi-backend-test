import { Document } from "mongoose";

export type Type = "REST" | "BD" | "SOAP";
export type Privacy = "PUBLIC" | "PRIVATE";

export interface IConnector extends Document {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  type: Type;
  privacy: Privacy;
  baseUrl: string;
  logoUrl: string;
  category: string;
  description: string;
  status: string;
}

import * as mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

export const connectorsSchema: any = new Schema({
  id: { type: String, default: uuid(), required: true },
  createdAt: {
    type: Date,
    default: new Date().toLocaleString(),
    required: true,
  },
  updatedAt: {
    type: Date,
    default: new Date().toLocaleString(),
    required: true,
  },
  name: { type: String, required: true },
  type: { type: String, required: true },
  privacy: { type: String, required: true },
  baseUrl: { type: String, required: true },
  logoUrl: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
});

import * as mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

export const connectorsSchema: any = new Schema({
  id:          { type: String, default: uuid() },
  createdAt:   { type: Date, default: new Date().toLocaleString() },
  updatedAt:   { type: Date, default: new Date().toLocaleString() },
  name:        String,
  type:        String,
  privacy:     String,
  baseUrl:     String,
  logoUrl:     String,
  category:    String,
  description: String,
  status:      String
});


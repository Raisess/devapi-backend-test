import * as mongoose from "mongoose";

const { Schema } = mongoose;

export const connectorsSchema: any = new Schema({
  id:          String,
  name:        String,
  type:        String,
  privacy:     String,
  baseUrl:     String,
  logoUrl:     String,
  category:    String,
  description: String,
  status:      String
});


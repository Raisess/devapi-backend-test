import { Document } from "mongoose";

export interface IConnector extends Document {
  id:          string;
  createdAt:   string;
  updatedAt:   string;
  name:        string;
  type:        string;
  privacy:     string;
  baseUrl:     string;
  logoUrl:     string;
  category:    string;
  description: string;
  status:      string;
}


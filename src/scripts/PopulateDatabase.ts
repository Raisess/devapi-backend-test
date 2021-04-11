import "dotenv/config";
import "../database/connect";

import { model, Model } from "mongoose";

import { IConnector } from "../connectors/interfaces/connectors.interface";
import { connectorsSchema } from "../connectors/schemas/connectors.schema";

class PopulateDatabase {
  public static async populate(): Promise<void> {
    const Connector: Model<IConnector> = model("Connector", connectorsSchema);
    const data: Array<IConnector> = require("./generated.json");

    for (const connector of data) {
      try {
        await new Connector(connector).save();

        console.log("created connector:", connector);
      } catch (err) {
        console.error(
          "failed to create connnector:",
          connector,
          "\ncause:",
          err.message,
        );
      }
    }
  }
}

PopulateDatabase.populate().then((): void => process.exit(1));

import { Injectable } from "@nestjs/common";
import { model, Model } from "mongoose";

import { IConnector } from "./interfaces/connectors.interface";
import { connectorsSchema } from "./schemas/connectors.schema";

const Connector: Model<IConnector> = model("Connector", connectorsSchema);

@Injectable()
export class ConnectorsService {
	public async create(connector: IConnector): Promise<void> {
		await Connector.create(connector);
	}

	public async findAll(): Promise<Array<IConnector>> {
		const connectors: Array<IConnector> = await Connector.find();

		return connectors;
	}	
}


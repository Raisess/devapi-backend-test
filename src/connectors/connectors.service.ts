import { Injectable } from "@nestjs/common";
import { model, Model } from "mongoose";

import { IConnector } from "./interfaces/connectors.interface";
import { connectorsSchema } from "./schemas/connectors.schema";

const Connector: Model<IConnector> = model("Connector", connectorsSchema);

@Injectable()
export class ConnectorsService {
	public async create(connector: IConnector): Promise<void> {
		await new Connector(connector).save();
	}

	public async findAll(): Promise<Array<IConnector>> {
		const connectors: Array<IConnector> = await Connector.find();

		return connectors;
	}

	public async findOne(id: string): Promise<IConnector> {
		const connectors: Array<IConnector> = await Connector.find();

		for (const connector of connectors) {
			if (connector.id === id) return connector;
		}

		throw new Error("Can't find, connector doesn't exists!");
	}

	public async remove(id: string): Promise<void> {
		const connectors: Array<IConnector> = await Connector.find();

		for (const connector of connectors) {
			if (connector.id === id) {
				connector.remove();

				return;
			}
		}

		throw new Error("Can't remove, connector doesn't exists!");
	}
}


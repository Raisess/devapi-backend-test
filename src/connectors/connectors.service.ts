import { Injectable } from "@nestjs/common";

import { IConnector } from "./interfaces/connectors.interface";

@Injectable()
export class ConnectorsService {
	private readonly connectors: Array<IConnector> = [];

	public async create(connector: IConnector): Promise<void> {
		this.connectors.push(connector);
	}

	public async findAll(): Promise<Array<IConnector>> {
		return this.connectors;
	}	
}


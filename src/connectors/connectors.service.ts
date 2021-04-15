import { Injectable } from "@nestjs/common";
import { model, Model } from "mongoose";

import { IConnector } from "./interfaces/connectors.interface";
import { CreateConnectorDto } from "./dto/create-connector.dto";
import { connectorsSchema } from "./schemas/connectors.schema";

const Connector: Model<IConnector> = model("Connector", connectorsSchema);

@Injectable()
export class ConnectorsService {
  public async create(connector: CreateConnectorDto): Promise<void> {
    await new Connector(connector).save();
  }

  public async findAll(search?: [string, string]): Promise<Array<IConnector>> {
    const connectors: Array<IConnector> = await Connector.find();

    if (search && !search.includes(" ")) {
      return connectors.filter(
        (connector: IConnector): boolean => connector[search[0]] === search[1],
      );
    } else {
      return connectors;
    }
  }

  public async findOne(id: string): Promise<IConnector> {
    const connectors: Array<IConnector> = await Connector.find();

    for (const connector of connectors) {
      if (connector.id === id) return connector;
    }

    throw new Error("Can't find, connector doesn't exists!");
  }

  public async update(id: string, newData: CreateConnectorDto): Promise<void> {
    const connector: IConnector = await this.findOne(id);

    await connector.updateOne({
      updatedAt: new Date().toLocaleString(),
      name: newData.name || connector.name,
      type: newData.type || connector.type,
      privacy: newData.privacy || connector.privacy,
      category: newData.category || connector.category,
      description: newData.description || connector.description,
      status: newData.status || connector.status,
      baseUrl: newData.baseUrl || connector.baseUrl,
      logoUrl: newData.logoUrl || connector.logoUrl,
    });
  }

  public async remove(id: string): Promise<void> {
    const connector: IConnector = await this.findOne(id);

    await connector.remove();
  }
}

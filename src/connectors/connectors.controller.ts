import { Controller, Post, Body, Get } from "@nestjs/common";

import { IConnector } from "./interfaces/connectors.interface";
import { ConnectorsService } from "./connectors.service";

@Controller("connectors")
export class ConnectorsController {
  constructor(private connectorsService: ConnectorsService) {}

  @Post()
  public async create(@Body() connector: IConnector): Promise<string> {
    this.connectorsService.create(connector);

    return JSON.stringify({
      log: "created new connector"
    });
  }

  @Get()
  public async findAll(): Promise<Array<IConnector>> {
    return this.connectorsService.findAll();
  }
}


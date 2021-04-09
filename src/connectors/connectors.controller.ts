import { Controller, Post, Body, Get, Param, Delete } from "@nestjs/common";

import { IConnector } from "./interfaces/connectors.interface";
import { ConnectorsService } from "./connectors.service";

@Controller("connectors")
export class ConnectorsController {
  constructor(private connectorsService: ConnectorsService) {}

  @Post()
  public async create(@Body() connector: IConnector): Promise<string> {
    await this.connectorsService.create(connector);

    return JSON.stringify({
      log: "created new connector"
    });
  }

  @Get()
  public async findAll(): Promise<Array<IConnector>> {
    return await this.connectorsService.findAll();
  }

  @Get(":id")
  public async findOne(@Param() { id }: { id: string }): Promise<IConnector> {
    return await this.connectorsService.findOne(id);
  }

  @Delete(":id")
  public async remove(@Param() { id }: { id: string }): Promise<string> {
    await this.connectorsService.remove(id);

    return JSON.stringify({
      log: "deleted connector"
    });
  }
}


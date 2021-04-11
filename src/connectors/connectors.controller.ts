import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Put,
  HttpStatus,
  HttpException,
} from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";

import { IConnector } from "./interfaces/connectors.interface";
import { ConnectorsService } from "./connectors.service";

@ApiBearerAuth()
@Controller("connectors")
export class ConnectorsController {
  constructor(private connectorsService: ConnectorsService) {}

  @Post()
  public async create(@Body() connector: IConnector): Promise<string> {
    try {
      await this.connectorsService.create(connector);

      return JSON.stringify({
        log: "created new connector",
      });
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.NOT_ACCEPTABLE);
    }
  }

  @Get()
  public async findAll(
    @Query("filter") filter?: string,
    @Query("search") search?: string,
  ): Promise<Array<IConnector>> {
    return await this.connectorsService.findAll([filter, search]);
  }

  @Get(":id")
  public async findOne(@Param() { id }: { id: string }): Promise<IConnector> {
    return await this.connectorsService.findOne(id);
  }

  @Put(":id")
  public async update(
    @Param() { id }: { id: string },
    @Body() connector: IConnector,
  ): Promise<string> {
    await this.connectorsService.update(id, connector);

    return JSON.stringify({
      log: "updated connector",
    });
  }

  @Delete(":id")
  public async remove(@Param() { id }: { id: string }): Promise<string> {
    await this.connectorsService.remove(id);

    return JSON.stringify({
      log: "deleted connector",
    });
  }
}

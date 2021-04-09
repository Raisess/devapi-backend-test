import { Module } from "@nestjs/common";

import { ConnectorsController } from "./connectors/connectors.controller";
import { ConnectorsService } from './connectors/connectors.service';

@Module({
	controllers: [ConnectorsController],
	providers:   [ConnectorsService]
})
export default class AppModule {}


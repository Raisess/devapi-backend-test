import "dotenv/config";
import "./database/connect";

import { NestFactory, NestApplication } from "@nestjs/core";

import { AppModule } from "./app.module";

const port: number | string = process.env.PORT || 1939;

class App {
	public static async bootstrap(): Promise<void> {
		const app: NestApplication = await NestFactory.create(AppModule);

		await app.listen(port, (): void => console.log("running on port:", port));
	}
}

App.bootstrap();


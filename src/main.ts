import "dotenv/config";
import "./database/connect";

import { NestFactory, NestApplication } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from "@nestjs/swagger";

import { AppModule } from "./app.module";

const port: number | string = process.env.PORT || 1939;

class App {
  public static async bootstrap(): Promise<void> {
    const app: NestApplication = await NestFactory.create(AppModule);

    const config: any = new DocumentBuilder()
      .setTitle("DEVAPI: Connectors API")
      .setDescription(
        "API feita para teste de vaga de desenvolvedor backend na devapi.",
      )
      .setVersion("1.0")
      .build();

    const document: OpenAPIObject = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("api", app, document);

    await app.listen(port, (): void => console.log("running on port:", port));
    console.log(`swagger is running on: http://localhost:${port}`);
  }
}

App.bootstrap();

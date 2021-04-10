import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";

import { AuthMiddleware } from "./common/middlewares/auth.middleware";
import { ConnectorsModule } from "./connectors/connectors.module";

@Module({
  imports: [ConnectorsModule],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthMiddleware).forRoutes("connectors");
  }
}

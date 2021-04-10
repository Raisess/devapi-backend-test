import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";

import { AuthMiddleware } from "./common/middlewares/auth.middleware";
import { ConnectorsModule } from "./connectors/connectors.module";
import { TokenModule } from "./token/token/token.module";

@Module({
  imports: [ConnectorsModule, TokenModule],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AuthMiddleware).forRoutes("connectors");
  }
}

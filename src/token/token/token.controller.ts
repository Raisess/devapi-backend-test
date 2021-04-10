import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

import { TokenService } from "./token.service";

@Controller("token")
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post()
  public create(@Body() payload: unknown): string {
    try {
      const token: string = this.tokenService.create(payload);

      return JSON.stringify({
        token,
      });
    } catch (err) {
      throw new HttpException(
        "Fail on bearer jwt token creation.",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

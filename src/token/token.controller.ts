import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

import { TokenService } from "./token.service";
import { CreateTokenDTO } from "./dto/create-token.dto";

@Controller("token")
export class TokenController {
  constructor(private tokenService: TokenService) {}

  @Post()
  public create(@Body() payload: CreateTokenDTO): string {
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

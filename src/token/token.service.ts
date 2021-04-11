import { Injectable } from "@nestjs/common";

import JWT from "../shared/JWT";

const jwt: JWT = new JWT();

@Injectable()
export class TokenService {
  public create(payload: unknown): string {
    return jwt.sign(payload);
  }
}

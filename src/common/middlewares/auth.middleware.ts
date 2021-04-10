import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from "express";

import JWT from "../../shared/JWT";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void | Response<any> {
    if (req.headers.authorization && req.headers.authorization.split(" ").includes("Bearer")) {
      const token: string = req.headers.authorization.split(" ")[1];

      if (new JWT().verify(token)){
        return next();
      }
    }

    return res.json({
      log: "Invalid authorization token"
    });
  }
}


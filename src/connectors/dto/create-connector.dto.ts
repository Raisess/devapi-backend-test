import { ApiProperty } from "@nestjs/swagger";

import { Type, Privacy } from "../interfaces/connectors.interface";

export class CreateConnectorDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: "string" })
  type: Type;

  @ApiProperty({ type: "string" })
  privacy: Privacy;

  @ApiProperty()
  baseUrl: string;

  @ApiProperty()
  logoUrl: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  status: string;
}

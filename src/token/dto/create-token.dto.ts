import { ApiProperty } from "@nestjs/swagger";

export class CreateTokenDTO {
  @ApiProperty()
  public payload: unknown;
}

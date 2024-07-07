import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { StripeService } from "./stripe.service";
import { ChargeInputDto } from "../stripe/ChargeInputDto";
import { ChargeOutputDto } from "../stripe/ChargeOutputDto";

@swagger.ApiTags("stripes")
@common.Controller("stripes")
export class StripeController {
  constructor(protected readonly service: StripeService) {}

  @common.Post("/stripe/charge")
  @swagger.ApiOkResponse({
    type: ChargeOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateCharge(
    @common.Body()
    body: ChargeInputDto
  ): Promise<ChargeOutputDto> {
        return this.service.CreateCharge(body);
      }
}

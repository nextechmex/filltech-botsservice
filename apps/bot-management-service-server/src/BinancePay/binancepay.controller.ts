import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BinancePayService } from "./binancepay.service";
import { PaymentInputDto } from "../binancePay/PaymentInputDto";
import { PaymentOutputDto } from "../binancePay/PaymentOutputDto";

@swagger.ApiTags("binancePays")
@common.Controller("binancePays")
export class BinancePayController {
  constructor(protected readonly service: BinancePayService) {}

  @common.Post("/binance-pay/payment")
  @swagger.ApiOkResponse({
    type: PaymentOutputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePayment(
    @common.Body()
    body: PaymentInputDto
  ): Promise<PaymentOutputDto> {
        return this.service.CreatePayment(body);
      }
}

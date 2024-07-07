import * as graphql from "@nestjs/graphql";
import { PaymentInputDto } from "../binancePay/PaymentInputDto";
import { PaymentOutputDto } from "../binancePay/PaymentOutputDto";
import { BinancePayService } from "./binancepay.service";

export class BinancePayResolver {
  constructor(protected readonly service: BinancePayService) {}

  @graphql.Mutation(() => PaymentOutputDto)
  async CreatePayment(
    @graphql.Args()
    args: PaymentInputDto
  ): Promise<PaymentOutputDto> {
    return this.service.CreatePayment(args);
  }
}

import { Injectable } from "@nestjs/common";
import { PaymentInputDto } from "../binancePay/PaymentInputDto";
import { PaymentOutputDto } from "../binancePay/PaymentOutputDto";

@Injectable()
export class BinancePayService {
  constructor() {}
  async CreatePayment(args: PaymentInputDto): Promise<PaymentOutputDto> {
    throw new Error("Not implemented");
  }
}

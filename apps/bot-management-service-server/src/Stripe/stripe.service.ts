import { Injectable } from "@nestjs/common";
import { ChargeInputDto } from "../stripe/ChargeInputDto";
import { ChargeOutputDto } from "../stripe/ChargeOutputDto";

@Injectable()
export class StripeService {
  constructor() {}
  async CreateCharge(args: ChargeInputDto): Promise<ChargeOutputDto> {
    throw new Error("Not implemented");
  }
}

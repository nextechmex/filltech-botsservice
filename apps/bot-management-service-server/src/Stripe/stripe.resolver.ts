import * as graphql from "@nestjs/graphql";
import { ChargeInputDto } from "../stripe/ChargeInputDto";
import { ChargeOutputDto } from "../stripe/ChargeOutputDto";
import { StripeService } from "./stripe.service";

export class StripeResolver {
  constructor(protected readonly service: StripeService) {}

  @graphql.Mutation(() => ChargeOutputDto)
  async CreateCharge(
    @graphql.Args()
    args: ChargeInputDto
  ): Promise<ChargeOutputDto> {
    return this.service.CreateCharge(args);
  }
}

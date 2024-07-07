import { Module } from "@nestjs/common";
import { StripeService } from "./stripe.service";
import { StripeController } from "./stripe.controller";
import { StripeResolver } from "./stripe.resolver";

@Module({
  controllers: [StripeController],
  providers: [StripeService, StripeResolver],
  exports: [StripeService],
})
export class StripeModule {}

import { Module } from "@nestjs/common";
import { BinancePayService } from "./binancepay.service";
import { BinancePayController } from "./binancepay.controller";
import { BinancePayResolver } from "./binancepay.resolver";

@Module({
  controllers: [BinancePayController],
  providers: [BinancePayService, BinancePayResolver],
  exports: [BinancePayService],
})
export class BinancePayModule {}

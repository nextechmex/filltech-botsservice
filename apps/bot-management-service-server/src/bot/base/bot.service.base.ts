/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bot as PrismaBot, User as PrismaUser } from "@prisma/client";

export class BotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BotCountArgs, "select">): Promise<number> {
    return this.prisma.bot.count(args);
  }

  async bots(args: Prisma.BotFindManyArgs): Promise<PrismaBot[]> {
    return this.prisma.bot.findMany(args);
  }
  async bot(args: Prisma.BotFindUniqueArgs): Promise<PrismaBot | null> {
    return this.prisma.bot.findUnique(args);
  }
  async createBot(args: Prisma.BotCreateArgs): Promise<PrismaBot> {
    return this.prisma.bot.create(args);
  }
  async updateBot(args: Prisma.BotUpdateArgs): Promise<PrismaBot> {
    return this.prisma.bot.update(args);
  }
  async deleteBot(args: Prisma.BotDeleteArgs): Promise<PrismaBot> {
    return this.prisma.bot.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.bot
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}

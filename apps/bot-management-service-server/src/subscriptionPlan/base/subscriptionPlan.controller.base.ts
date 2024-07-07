/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SubscriptionPlanService } from "../subscriptionPlan.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SubscriptionPlanCreateInput } from "./SubscriptionPlanCreateInput";
import { SubscriptionPlan } from "./SubscriptionPlan";
import { SubscriptionPlanFindManyArgs } from "./SubscriptionPlanFindManyArgs";
import { SubscriptionPlanWhereUniqueInput } from "./SubscriptionPlanWhereUniqueInput";
import { SubscriptionPlanUpdateInput } from "./SubscriptionPlanUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SubscriptionPlanControllerBase {
  constructor(
    protected readonly service: SubscriptionPlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SubscriptionPlan })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionPlan",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSubscriptionPlan(
    @common.Body() data: SubscriptionPlanCreateInput
  ): Promise<SubscriptionPlan> {
    return await this.service.createSubscriptionPlan({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        price: true,
        description: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SubscriptionPlan] })
  @ApiNestedQuery(SubscriptionPlanFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SubscriptionPlan",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subscriptionPlans(
    @common.Req() request: Request
  ): Promise<SubscriptionPlan[]> {
    const args = plainToClass(SubscriptionPlanFindManyArgs, request.query);
    return this.service.subscriptionPlans({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        price: true,
        description: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SubscriptionPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionPlan",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async subscriptionPlan(
    @common.Param() params: SubscriptionPlanWhereUniqueInput
  ): Promise<SubscriptionPlan | null> {
    const result = await this.service.subscriptionPlan({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        price: true,
        description: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SubscriptionPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionPlan",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSubscriptionPlan(
    @common.Param() params: SubscriptionPlanWhereUniqueInput,
    @common.Body() data: SubscriptionPlanUpdateInput
  ): Promise<SubscriptionPlan | null> {
    try {
      return await this.service.updateSubscriptionPlan({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          price: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SubscriptionPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SubscriptionPlan",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSubscriptionPlan(
    @common.Param() params: SubscriptionPlanWhereUniqueInput
  ): Promise<SubscriptionPlan | null> {
    try {
      return await this.service.deleteSubscriptionPlan({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          price: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

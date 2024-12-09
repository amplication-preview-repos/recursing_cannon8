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
import { ToolService } from "../tool.service";
import { ToolCreateInput } from "./ToolCreateInput";
import { Tool } from "./Tool";
import { ToolFindManyArgs } from "./ToolFindManyArgs";
import { ToolWhereUniqueInput } from "./ToolWhereUniqueInput";
import { ToolUpdateInput } from "./ToolUpdateInput";

export class ToolControllerBase {
  constructor(protected readonly service: ToolService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tool })
  async createTool(@common.Body() data: ToolCreateInput): Promise<Tool> {
    return await this.service.createTool({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tool] })
  @ApiNestedQuery(ToolFindManyArgs)
  async tools(@common.Req() request: Request): Promise<Tool[]> {
    const args = plainToClass(ToolFindManyArgs, request.query);
    return this.service.tools({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
        version: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tool(
    @common.Param() params: ToolWhereUniqueInput
  ): Promise<Tool | null> {
    const result = await this.service.tool({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
        version: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTool(
    @common.Param() params: ToolWhereUniqueInput,
    @common.Body() data: ToolUpdateInput
  ): Promise<Tool | null> {
    try {
      return await this.service.updateTool({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          price: true,
          updatedAt: true,
          version: true,
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
  @swagger.ApiOkResponse({ type: Tool })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTool(
    @common.Param() params: ToolWhereUniqueInput
  ): Promise<Tool | null> {
    try {
      return await this.service.deleteTool({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          price: true,
          updatedAt: true,
          version: true,
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

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TelegramSubscriptionWhereUniqueInput } from "./TelegramSubscriptionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TelegramSubscriptionUpdateInput } from "./TelegramSubscriptionUpdateInput";

@ArgsType()
class UpdateTelegramSubscriptionArgs {
  @ApiProperty({
    required: true,
    type: () => TelegramSubscriptionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TelegramSubscriptionWhereUniqueInput)
  @Field(() => TelegramSubscriptionWhereUniqueInput, { nullable: false })
  where!: TelegramSubscriptionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TelegramSubscriptionUpdateInput,
  })
  @ValidateNested()
  @Type(() => TelegramSubscriptionUpdateInput)
  @Field(() => TelegramSubscriptionUpdateInput, { nullable: false })
  data!: TelegramSubscriptionUpdateInput;
}

export { UpdateTelegramSubscriptionArgs as UpdateTelegramSubscriptionArgs };

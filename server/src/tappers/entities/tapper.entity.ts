// schemas/tappers.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tappers extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true }) // This ensures taperId is unique
  taperId: number;

  @Prop({ required: true })
  numberOfRubber: string;

  @Prop()
  address: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const TappersSchema = SchemaFactory.createForClass(Tappers);

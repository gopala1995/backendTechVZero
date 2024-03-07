import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ collection: 'employee' })
export class Employee {
  @Prop()
  name: string;

  @Prop()
  role: string;

  @Prop()
  text: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

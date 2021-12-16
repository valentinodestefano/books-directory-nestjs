import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';


@Schema()
export class Book{

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    imageURL: string;

    @Prop()
    yearOfPublication: number;

    @Prop()
    createdAt: Date;

    @Prop()
    status: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
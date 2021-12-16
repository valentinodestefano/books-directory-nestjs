import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

import { Book } from "src/book/schema/book.schema";


@Schema()
export class Autor{

    @Prop()
    name: string;

    @Prop()
    lastName: string;

    @Prop()
    age: number;

    @Prop()
    createdAt: Date;

    @Prop()
    status: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Book.name }] })
    books: mongoose.Types.Array<Book>;

}

export const AutorSchema = SchemaFactory.createForClass(Autor);
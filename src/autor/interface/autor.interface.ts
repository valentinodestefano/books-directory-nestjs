
import { Document, Types } from "mongoose";

import { Book } from "src/book/interface/book.interface";

export interface Autor extends Document {
    readonly name: string;
    readonly lastName: string;
    readonly age: number;
    readonly createAt: Date;
    readonly status: string;
}
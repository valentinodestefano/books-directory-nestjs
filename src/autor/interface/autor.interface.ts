import { Document } from "mongoose";

export interface Autor extends Document {
    readonly name: string;
    readonly lastName: string;
    readonly age: number;
    readonly createAt: Date;
    readonly status: string;
}
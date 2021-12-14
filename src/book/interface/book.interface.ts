import { Document } from "mongoose";

export interface Book extends Document {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly yearOfPublication: number;
    readonly createAt: Date;
    readonly status: string;
}
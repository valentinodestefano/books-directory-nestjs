import { Schema } from "mongoose";

export const AutorSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: Number,
    createAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Alive'
    }
});
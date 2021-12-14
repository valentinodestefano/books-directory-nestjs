import { Schema } from "mongoose";

export const BookSchema = new Schema({
    name: { type: String, required: true },
    yearOfPublication: Number,
    description: String,
    imageURL: String,
    createAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Not Read'
    }
});
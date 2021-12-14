import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Book } from './interface/book.interface';
import { CreateBookDTO } from './dto/book.dto';

@Injectable()
export class BookService {

    constructor(@InjectModel('Book') private readonly bookModel: Model<Book>){}

    async getBooks(): Promise<Book[]> {
        const books = await this.bookModel.find()
        return books;
    }

    async getBook(bookID: string): Promise<Book>{
        const book = await this.bookModel.findById(bookID);
        return book;
    }

    async createBook(createBookDTO: CreateBookDTO): Promise<Book>{
        const newBook = new this.bookModel(createBookDTO); 
       return await newBook.save();
    }

    async deleteBook(bookID: string): Promise<Book>{
        const bookDeleted = await this.bookModel.findByIdAndDelete(bookID);
        return bookDeleted;
    }

    async updateBook(bookID: string, createBookDTO: CreateBookDTO): Promise<Book>{
        const bookUpdated = await this.bookModel.findByIdAndUpdate(bookID, createBookDTO, { new: true});
        return bookUpdated;
    }

}

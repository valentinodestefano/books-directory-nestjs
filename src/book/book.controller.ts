import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';

import { CreateBookDTO } from './dto/book.dto';

import { BookService } from './book.service';
import { NotFoundError } from 'rxjs';

@Controller('book')
export class BookController {

    constructor(private bookService: BookService){}

    @Post('/createBook')
    async createPost(@Res() res, @Body() createBookDTO: CreateBookDTO){
        const book = await this.bookService.createBook(createBookDTO);
        return res.status(HttpStatus.OK).json({
            message: 'received',
            book: book
        });
    }

    @Get('/getBooks')
    async getBooks(@Res() res){
        const books = await this.bookService.getBooks();
        return res.status(HttpStatus.OK).json({
            message: 'Succesfull',
            books: books
        })
    }

    @Get('/:bookID')
    async getBook(@Res() res, @Param('bookID') bookID: string){
        const book = await this.bookService.getBook(bookID);
        if (!book) {
           return res.status(HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json({
            message: 'succesfull',
            book: book
        })
    }

    @Delete('/deletebook/:bookID')
    async deleteBook(@Res() res, @Param('bookID') bookID: string){
        const book = await this.bookService.deleteBook(bookID);
        return res.status(HttpStatus.OK).json({
            message: 'succesful'
        })
    }

    @Put('/update/:bookID')
    async updateBook(@Param('bookID') bookID: string, @Body() createBookDTO: CreateBookDTO, @Res() res){
        const updatedBook = await this.bookService.updateBook(bookID, createBookDTO);
        return res.status(HttpStatus.OK).json({
            message: 'succesful update',
            book: updatedBook
        })
    }

}

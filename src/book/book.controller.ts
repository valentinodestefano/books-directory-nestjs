import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { CreateBookDTO } from './dto/book.dto';

import { BookService } from './book.service';

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

}

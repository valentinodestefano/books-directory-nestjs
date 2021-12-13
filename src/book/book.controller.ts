import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { CreateBookDTO } from './dto/book.dto';

@Controller('book')
export class BookController {

    @Post('/createBook')
    createPost(@Res() res, @Body() createBookDTO: CreateBookDTO){
        
        return res.status(HttpStatus.OK).json({
            message: 'received'
        });
    }

}

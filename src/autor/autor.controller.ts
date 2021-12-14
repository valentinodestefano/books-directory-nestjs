import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';

import { CreateAutorDTO } from './dto/autor.dto';

import { AutorService } from './autor.service';

import { ApiTags } from '@nestjs/swagger';


@Controller('autor')
export class AutorController {

    constructor(private autorService: AutorService){}

    @ApiTags('Autor')
    @Post('/createAutor')
    async createPost(@Res() res, @Body() createAutorDTO: CreateAutorDTO){
        const autor = await this.autorService.createAutor(createAutorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'created',
            book: autor
        });
    }

    @ApiTags('Autor')
    @Get('/getAutors')
    async getAutors(@Res() res){
        const autors = await this.autorService.getAutors();
        return res.status(HttpStatus.OK).json({
            message: 'Succesfull',
            books: autors
        })
    }

    @ApiTags('Autor')
    @Get('/:autorID')
    async getAutor(@Res() res, @Param('autorID') autorID: string){
        const autor = await this.autorService.getAutor(autorID);
        if (!autor) {
           return res.status(HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json({
            message: 'succesfull',
            autor: autor
        })
    }

    @ApiTags('Autor')
    @Delete('/deleteautor/:autorID')
    async deleteAutor(@Res() res, @Param('autorID') autorID: string){
        const autor = await this.autorService.deleteAutor(autorID);
        return res.status(HttpStatus.OK).json({
            message: 'succesful'
        })
    }

    @ApiTags('Autor')
    @Put('/update/:autorID')
    async updateBook(@Param('autorID') autorID: string, @Body() createAutorDTO: CreateAutorDTO, @Res() res){
        const updatedAutor = await this.autorService.updateAutor(autorID, createAutorDTO);
        return res.status(HttpStatus.OK).json({
            message: 'succesful update',
            book: updatedAutor
        })
    }

}

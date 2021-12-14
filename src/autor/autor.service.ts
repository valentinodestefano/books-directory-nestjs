import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Autor } from './interface/autor.interface';
import { CreateAutorDTO } from './dto/autor.dto';

@Injectable()
export class AutorService {

    constructor(@InjectModel('Autor') private readonly autorModel: Model<Autor>){}

    async getAutors(): Promise<Autor[]> {
        const autors = await this.autorModel.find()
        return autors;
    }

    async getAutor(bookID: string): Promise<Autor>{
        const autor = await this.autorModel.findById(bookID);
        return autor;
    }

    async createAutor(createAutorDTO: CreateAutorDTO): Promise<Autor>{
        const newAutor = new this.autorModel(createAutorDTO); 
       return await newAutor.save();
    }

    async deleteAutor(bookID: string): Promise<Autor>{
        const autorDeleted = await this.autorModel.findByIdAndDelete(bookID);
        return autorDeleted;
    }

    async updateAutor(autorID: string, createAutorDTO: CreateAutorDTO): Promise<Autor>{
        const autorToUpdate = await this.autorModel.findByIdAndUpdate(autorID, createAutorDTO, { new: true });
        return await autorToUpdate.save();
    }

}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [BookModule, MongooseModule.forRoot('mongodb://localhost/books-nestjs', {
    useNewUrlParser: true
  }), AutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

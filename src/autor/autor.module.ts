import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';
import { AutorSchema } from './schema/autor.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Autor', schema: AutorSchema}
  ])],
  controllers: [AutorController],
  providers: [AutorService]
})
export class AutorModule {}

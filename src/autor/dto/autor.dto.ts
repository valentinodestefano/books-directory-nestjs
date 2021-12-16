import { OmitType, PartialType } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { isArray } from 'util';
export class CreateAutorDTO {

    @ApiModelProperty({
        description: 'Autor Name',
        example: 'Valentino',
    })
    readonly name: string;

    @ApiModelProperty({
        description: 'Autor Last name',
        example: 'Destefano',
    })
    readonly lastName: string;

    @ApiModelProperty({
        description: 'Autor age',
        example: 22,
    })
    readonly age: number;

    @ApiModelProperty({
        description: 'Date when is created the book',
        example: '2021-12-12',
    })
    readonly createAt: Date;

    @ApiModelProperty({
        description: 'Autor Status',
        example: 'Alive',
    })
    readonly status: string;

    @ApiModelProperty({
        description: 'Autors Books',
        example: 'string',
    })
    readonly books: string[];
}

export class UpdateAutorDTO extends PartialType(
    OmitType(CreateAutorDTO, ['books']),
){}
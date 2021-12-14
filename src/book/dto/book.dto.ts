import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
export class CreateBookDTO {

    @ApiModelProperty({
        description: 'Book Name',
        example: 'Rich Dad Poor Dad',
    })
    readonly name: string;

    @ApiModelProperty({
        description: 'Publication year of the book',
        example: '2021',
    })
    readonly yearOfPublication: number;

    @ApiModelProperty({
        description: 'Description of the book',
        example: 'This book explains the value of the money...',
    })
    readonly description: string;

    @ApiModelProperty({
        description: 'Date when is created the book',
        example: '2021-12-12',
    })
    readonly createAt: Date;

    @ApiModelProperty({
        description: 'image of the book',
        example: 'URL',
    })
    readonly imageURL: string;

    @ApiModelProperty({
        description: 'Book Status',
        example: 'not read',
    })
    readonly status: string;
}
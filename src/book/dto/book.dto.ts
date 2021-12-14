export class CreateBookDTO {
    readonly name: string;
    readonly yearOfPublication: number;
    readonly description: string;
    readonly createAt: Date;
    readonly imageURL: string;
    readonly status: string;
}
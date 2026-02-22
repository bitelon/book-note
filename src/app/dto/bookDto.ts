export interface BookDto {
    id: string;
    data: BookFormDto;
}

export interface BookFormDto {
    name: string;
    author: string;
    note: string;
}
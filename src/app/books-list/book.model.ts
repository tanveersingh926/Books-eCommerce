export class Book {
    constructor(
        public _id: number,
        public title: string,
        public isbn: string,
        public pageCount: number,
        public publishedDate: { $date: string },
        public thumbnailUrl: string,
        public longDescription: string,
        public status: string,
        public authors: Array<string>,
        public categories: Array<string>,
        public price: string
    ) {}
}

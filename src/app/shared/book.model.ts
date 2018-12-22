export class Book {
    constructor(
        public id: number,
        public isbn: string,
        public title: string,
        public subtitle: string,
        public author: string,
        public price: number,
        public published: string,
        public publisher: string,
        public pages: number,
        public description: string,
        public website: string,
        public image: string,
    ) {}
}

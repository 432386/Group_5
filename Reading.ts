class Book {
    chapterName: string;
    constructor(public first_chapterName: string, public second_chapterName: string) {
        this.chapterName = first_chapterName +  " " + second_chapterName;
    }
}

interface Reader {
    first_chapterName: string;
    second_chapterName: string;
}

function Reading(reader : Reader) {
    return "Hello reader, these are the chapters for today: " + reader.first_chapterName + " " + reader.second_chapterName;
}

let reader = new Book("Chapter 1 - HTML Elements,",  "Chapter 2 - Introduction to JavaScript.");

document.body.innerHTML = Reading(reader);
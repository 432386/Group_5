var Book = /** @class */ (function () {
    function Book(first_chapterName, second_chapterName) {
        this.first_chapterName = first_chapterName;
        this.second_chapterName = second_chapterName;
        this.chapterName = first_chapterName + " " + second_chapterName;
    }
    return Book;
}());
function Reading(reader) {
    return "Hello reader, these are the chapters for today: " + reader.first_chapterName + " " + reader.second_chapterName;
}
var reader = new Book("Chapter 1 - HTML Elements,", "Chapter 2 - Introduction to JavaScript.");
document.body.innerHTML = Reading(reader);

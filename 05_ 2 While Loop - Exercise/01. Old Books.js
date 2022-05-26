function oldBooks(input) {
    let bookAny = input[0];
    let bookIsFound = false;

    let index = 1;
    let book = input[index];

    while (book !== "No More Books") {
        if (bookAny === book) {
            bookIsFound = true
            break;
        }
        index++;
        book = input[index];
    }
    if (bookIsFound) {
        console.log(`You checked ${index - 1} books and found it.`)
    } else {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    }
}
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])


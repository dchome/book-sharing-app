import deepFreeze from 'deep-freeze';

const Books = deepFreeze([
  {
    title: "The FountainHead",
    author: "Ayn Rand",
    year: 1943,
    isbn: "1234567890",
    synopsis: "The Fountainhead is a 1943 novel by Ayn Rand, and her first major literary success. More than 6.5 million copies of the book have been sold worldwide. It's loved by Republicans across the nation.",
    images: {default: "https://en.wikipedia.org/wiki/File:TheFountainhead.jpg"}
  }
])

export default Books;

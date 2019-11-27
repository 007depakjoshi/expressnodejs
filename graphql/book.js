module.exports = (buildSchema) => {
  return {
    bookSchema: buildSchema(`
      type Book {
        id: ID
        name: String
        isbn: String
      }
      type Query {
        book(id: ID): Book
      }`
    ),
    bookQuery: `
    {
        book {
            name
            isbn
        }
    }`
  }
};

/* for normal api
bookQuery: `
      {
        book {
         id
         name
        isbn
      }
    }`
*/
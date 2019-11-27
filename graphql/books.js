module.exports = (buildSchema) => {
  return {
    booksSchema: buildSchema(`
      type Book {
        id: ID
        name: String
        isbn: String
      }
      type Query {
        books(id: ID): [Book]
      }`
    ),
    booksQuery: `
    {
        books {
            name
            isbn
        }
    }`
    }
};
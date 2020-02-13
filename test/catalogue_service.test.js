const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByAuthor("Hilary Mantel")).toBe(5);
      expect(catalogueService.countBooksByAuthor("Celeste Ng")).toBe(1);
      expect(catalogueService.countBooksByAuthor("Charles Dickens")).toBe(3);
    });
  });

  describe("catalogueService.checkBookByTitle", () => {
    test("returns true if the book exists", () => {
      expect(
        catalogueService.checkBookByTitle(
          "The Assassination of Margaret Thatcher")).toBe(true);
    });
  });
  describe("catalogueService.countBooksByAuthor", () => {
    test("returns the total number of books written by the given author", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);      
      expect(catalogueService.countBooksByFirstLetter("2")).toBe(1);
      expect(catalogueService.countBooksByFirstLetter("w")).toBe(2);  
    });
  });
  describe("catalogueService.getQuantity", () => {
    test("returns quantity of a given book title in stock", () => {
      expect(catalogueService.getQuantity("Oliver Twist")).toBe(7);      
      expect(catalogueService.getQuantity("Dracula")).toBe(0);
      expect(catalogueService.getQuantity("The Yellow Wallpaper")).toBe(12);  
    });
  });
  describe("catalogueService.getBooksByAuthor", () => {
    test("returns any books strings when an Author is searched", () => {
      expect(catalogueService.getBooksByAuthor("Margaret Atwood")).toEqual([ { title: 'The Blind Assassin',
      author: 'Margaret Atwood',
      quantity: 8 } ]);
      expect(catalogueService.getBooksByAuthor("Jeanette Winterson")).toEqual([ { title: 'Why Be Happy When You Could Be Normal?',
      author: 'Jeanette Winterson',
      quantity: 19 } ]);
    });
  });
  describe("catalogueService.checkQuantity", () => {
    test("returns true if title and quantity are met", () => {
      expect(catalogueService.checkQuantity("The Blind Assassin",2)).toBe(true);
      expect(catalogueService.checkQuantity("The Blind Assassin",500)).toBe(false);
      expect(catalogueService.checkQuantity("By Night In Chile",1)).toBe(true);
      expect(catalogueService.checkQuantity("By Night In Chile",100)).toBe(false);
    });
  });
});

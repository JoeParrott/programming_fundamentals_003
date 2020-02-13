// eslint-disable-next-line no-unused-vars



 const catalogue = [
  {title:"The Catcher in the Rye", author: "J.D. Salinger", quantity: 10},
  {title:"Dracula", author: "Bram Stoker", quantity: 0},
  {title:"Between the Assassinations", author:"Aravind Adiga", quantity: 9},
  {title:"Wolf Hall", author:"Hilary Mantel", quantity: 33},
  {title:"Bring Up The Bodies", author:"Hilary Mantel", quantity: 31},
  {title:"A Place of Greater Safety", author:"Hilary Mantel", quantity: 11},
  {title:"Giving Up the Ghost", author:"Hilary Mantel", quantity: 8},
  {title:"The Assassination of Margaret Thatcher", author:"Hilary Mantel", quantity: 43},
  {title:"The Yellow Wallpaper", author:"Charlotte Perkins Gilman", quantity: 12},
  {title:"Conversations With Friends", author: "Sally Rooney", quantity: 1},
  {title:"Normal People", author:"Sally Rooney", quantity: 2},
  {title:"Everything I Never Told You", author:"Celeste Ng", quantity: 6},
  {title:"2666", author:"Robert Bolaño", quantity: 17},
  {title:"By Night In Chile", author:"Robert Bolaño", quantity: 8},
  {title:"A Tale of Two Cities", author:"Charles Dickens", quantity: 3},
  {title:"Oliver Twist", author:"Charles Dickens", quantity: 7},
  {title:"Great Expectations", author:"Charles Dickens", quantity: 1},
  {title:"The Blind Assassin", author: "Margaret Atwood", quantity: 8},
  {title:"Why Be Happy When You Could Be Normal?", author: "Jeanette Winterson", quantity: 19},
  {title:"The Origin of Species", author: "Charles Darwin", quantity: 50}
 ];

function countBooksByAuthor(authorTwo) {
  let authorCount = 0;                        //counter
  for (i = 0; i < catalogue.length; i++) {    //loop
  if (catalogue[i].author === authorTwo) {
    authorCount++
  }
  }        
  return authorCount
}                                             
                                              
function checkBookByTitle(titleTwo) {
  // loop through catalogue
  for (i = 0; i < catalogue.length; i++) {
      // does titleTwo match any of the title string
      if(catalogue[i].title.toLowerCase().includes(titleTwo.toLowerCase())) {
          // if true stop loop and return true
        return true
      }
      }
        // else return false
      return false
  }

function countBooksByFirstLetter(firstLetter) {
  // add counter
  let total = 0;
  // loop
  for (i = 0; i <catalogue.length; i++) {
      if (catalogue[i].title.toLowerCase().charAt(0) === firstLetter.toLowerCase())
  // find .charAt(0)
    // add to counter
      total++;
  }
  
  // return counter total
  return total
}

function getQuantity(titleTwo) {
  // loop over catalogue
  for (i=0; i <catalogue.length; i++) {
  // check if title of loop = titleTwo ie the one we want!
    if (catalogue[i].title === titleTwo) {
  // if we have a match, store this index# in titleMatch
      let titleMatch = catalogue[i];
  // use titleMatch object to find quantity we need
        return titleMatch.quantity
    }
  }
  }

function getBooksByAuthor(authorReq) {
    // declare entry silo
    let entries = [];
    // loop over catalogue
    for (i=0; i <catalogue.length; i++) {
    // find any books by our author
      if (catalogue[i].author === authorReq) {
    // push these indexes to a new array/object
        entries.push(catalogue[i]);
      }
    // return all entries
    }
    return entries
  }

  function checkQuantity(bookTitle, quantOfBook) {
    // set loop
  for (i=0; i < catalogue.length; i++) {
    // if title matches && more in stock than reqd
    if (catalogue[i].title === bookTitle && catalogue[i].quantity >= quantOfBook) {
    // return true
      return true
    }
    // set false comeback for after loop has finished
    //if i reaches end
     // return false
     if (i === catalogue.length-1){
       return false
     }
    }
  }

module.exports = {
  countBooksByAuthor,
  checkBookByTitle,
  countBooksByFirstLetter,
  getQuantity,
  getBooksByAuthor,
  checkQuantity
};

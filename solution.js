// 00 - multiplication table

function multiplicationTable(rows, columns) {
  let result = [];

  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= columns; j++) {
      let input = i * j;
      row.push(input);
    }
    result.push(row);
  }
  return result;
}

console.log(multiplicationTable(5, 5));

// 01 - find object properties

function findObjPropsHasOwn(obj) {
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  console.log(result);
  return result.join(', ');
}

//obj keys
const findObjKeys = (obj) => {
  let keys = Object.keys(obj);
  return keys.join(', ');
};

// 02 - create book

function createBook(id, title, author, price) {
  let book = Object.create(createBook);

  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}

createBook.getInfo = function () {
  return `${this.title} by ${this.author}`;
};

createBook.getPrice = function () {
  return this.price;
};

createBook.addRating = function (rating) {
  this.rating.push(rating);
};

createBook.getRating = function () {
  let rating = this.rating;
  let stars = 0;

  for (let i = 0; i < rating.length; i++) {
    stars += rating[i].length;
  }

  return stars / rating.length;
};

// 03 - alphabet soup

const soup = (phrase, bank) => {
  for (let i = 0; i < phrase.length; i++) {
    if (!bank.includes(phrase[i])) {
      return false;
    }
  }

  return phrase.length < bank.length
    ? true
    : phrase.length !== bank.length
    ? false
    : true;
};

// 04 - run num times

const runNumTimes = (func, num) => {
  let count = 0;

  while (count < num) {
    count++;
    func();
  }
};

// 05 - reject

const reject = (arr, callback) => {
  return arr.filter((val) => {
    if (!callback(val)) {
      return val;
    }
  });
};

// 06 - array methods

const useMapToUpperCase = (str) => {
  return str.split(' ').map((val) => {
    return val.toUpperCase();
  });
};

const useFilter = (arr) => {
  return arr.filter((val) => {
    if (val.includes('@')) {
      return val;
    }
  });
};

const sumWithReduce = (arr, start = 0) => {
  return arr.reduce((sum, val) => {
    return sum + val;
  }, start);
};

const filterEvensDoubleAndSum = (arr) => {
  return arr
    .filter((val) => {
      if (val % 2 === 0) {
        return val;
      }
    })
    .map((val) => {
      return val * 2;
    })
    .reduce((sum, val) => {
      return sum + val;
    });
};

// 07 - thrice

const thrice = (callback) => {
  let count = 0;
  return () => {
    if (count < 3) {
      count++;
      return callback();
    }
  };
};

// 08 - keypad

const presses = (str) => {
  str = str.toUpperCase().split('');

  let keypad = [
    ['1'],
    ['A', 'B', 'C', '2'],
    ['D', 'E', 'F', '3'],
    ['G', 'H', 'I', '4'],
    ['J', 'K', 'L', '5'],
    ['M', 'N', 'O', '6'],
    ['P', 'Q', 'R', 'S', '7'],
    ['T', 'U', 'V', '8'],
    ['W', 'X', 'Y', 'Z', '9'],
    [' ', '0'],
  ];

  return keypad.reduce((accum, keypad) => {
    str.filter((char) => {
      if (keypad.includes(char)) {
        accum += keypad.indexOf(char) + 1;
      }
    });
    return accum;
  }, 0);
};

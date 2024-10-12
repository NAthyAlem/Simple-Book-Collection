import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

let books = [
  {
    id: 1,
    title: "Fikr eske Mekabr",
    author: "Addis Alemayehu",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/02/%E1%8D%8D%E1%89%85%E1%88%AD-%E1%8A%A5%E1%88%B5%E1%8A%A8-%E1%88%98%E1%89%83%E1%89%A5%E1%88%AD-.pdf",
  },
  {
    id: 2,
    title: "Dertogada",
    content:
      "Dertogada (ዴርቶጋዳ) is the most well known Ethiopian science fiction book written by Yismaike Werku. After its first release in 2001, it rapidly got viral and was published multiple times in a short period.",
    author: "Yismaike Werku",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/03/%E1%8B%B4%E1%88%AD%E1%89%B6%E1%8C%8B%E1%8B%B3-%E1%88%99%E1%88%89-%E1%8A%AD%E1%8D%8D%E1%88%8D-Pdf.pdf",
  },
  {
    id: 3,
    title: "Keadmas Bashager",
    content:
      "Abera Werku is the novel's main character from a wealthy and well-respected family with a decent job. But his soul is restless; his passion is somewhere else, and his calling is different.",
    author: "Bealu Girma",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/02/%E1%89%A0%E1%8B%93%E1%88%89-%E1%8C%8D%E1%88%AD%E1%88%9B_%E1%8A%A8%E1%8A%A0%E1%8B%B5%E1%88%9B%E1%88%B5-%E1%89%A3%E1%88%BB%E1%8C%88%E1%88%AD.pdf",
  },
  {
    id: 4,
    title: "Lela Sew",
    content:
      "Lela Sew in English, also known as 'Another Person', is the second novel of Dr. Meheret, after  Yetekolefebet Kulf. The book has a genre of psychological fiction and focuses on personality. It narrates many different characters and their relationship with each other. ",
    author: "Mihret Debebe",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/02/%E1%88%8C%E1%88%8B-%E1%88%B0%E1%8B%8D.pdf",
  },
  {
    id: 5,
    title: "Tikusat",
    content:
      "Tikusat (ትኩሳት) is a classic novel written by the famous Ethiopian author Sibhat G/egziabher who is well known for his free use of taboo languages. The book is based on the author's real story during his stay in France. The story revolves around his university friends in a small university town called x -unprovance.",
    author: " Sibhat G/egziabher",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/02/%E1%88%8C%E1%88%8B-%E1%88%B0%E1%8B%8D.pdf",
  },
  {
    id: 6,
    title: "Emegua",
    content:
      "Emegua is the first of a three-book series, followed by Zigora and Merbebt. The main character in the book sets out in the search of the holy grail. On this quest, he explores different monasteries of Ethiopia and their secrets. The book tries to revive the fallen spirit of Ethiopianism and illustrate the greatness of the ancient ethEthiopiansd their unexplored history. ",
    author: "Alemayehu  Wasse",
    link: "https://www.goodreads.com/book/show/26167585",
  },
  {
    id: 7,
    title: "Letum Aynegalign",
    content:
      "Letum Aynegalign (ሌቱም አይነጋልኝ) is a novel written by the famous Ethiopian author Sibhat Gebre-Egziabher. The book, was published in 2000. It has a genre of romantic fiction novels with adult content.",
    author: "Sibhat Gebre-Egziabher",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/02/%E1%88%8C%E1%89%B1%E1%88%9D-%E1%8A%A0%E1%8B%AD%E1%8A%90%E1%8C%8B%E1%88%8D%E1%8A%9D.pdf",
  },
  {
    id: 8,
    title: "Keletat Gimash Ken ",
    content: "ሁላችንም ታሪካችን ከእለታት አንድ ቀን ጀምሮ ከእለታት አንድ ቀን ያበቃል ",
    author: "Alex Abraham",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/02/%E1%8A%A8%E1%8B%95%E1%88%88%E1%89%B3%E1%89%B5-%E1%8C%8D%E1%88%9B%E1%88%BD-%E1%89%80%E1%8A%95.pdf",
  },
  {
    id: 9,
    title: "The Alchemist",
    content:
      "The book narrates a story of a young person who traveled from the countryside of Spain to the pyramids of Egypt to pursue his dream. The book describes the young Santiago's sacrifice to realize his dreams come true.",
    author: " Paulo Cohelio",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/03/%E1%8A%A0%E1%88%8D%E1%8A%AC%E1%88%9A%E1%88%B5%E1%89%B1.pdf",
  },
  {
    id: 10,
    title: "Eyariko",
    content:
      "These books are comedy-type books written to captivate the attention of the young generation. But it also gives a general knowledge, it slightly covers a bit of everything, from politics to philosophy, from sport to sexuality, from love to religion and so on.",
    author: " Azerg",
    link: "https://typicalethiopian.com/wp-content/uploads/2022/03/%E1%8A%A2%E1%8B%AB%E1%88%AA%E1%8A%AE-777-%E1%89%A0%E1%8A%A0%E1%8B%98%E1%88%AD%E1%8C%8D.pdf",
  },
];

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Get all books
app.get("/books", (req, res) => {
  res.json(books);
});
//Get specific book by id
app.get("/books/:id", (req, res) => {
  const idd = parseInt(req.params.id);
  const foundBook = books.find((book) => book.id === idd);
  res.json(foundBook);
});

//post Book
app.post("/books/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    link: req.body.link,
  };
  if (newBook) {
    books.push(newBook);
    res.json(newBook);
  } else {
    res.status(400).json("Bad Request");
  }
});

//Patch or partially update Book
app.patch("/books/:id", (req, res) => {
  const idd = parseInt(req.params.id);
  const foundBook = books.find((book) => book.id === idd);
  foundBook = {
    title: req.body.title || foundBook.title,
    content: req.body.content || foundBook.content,
    author: req.body.author || foundBook.author,
    link: req.body.link || foundBook.link,
  };
  const foundBookIndex = books.findIndex((book) => book.id === idd);
  if (foundBookIndex === -1) {
    res.status(404).json("Book Not Found");
  } else {
    books[foundBookIndex] = foundBook;
    res.json(books[foundBookIndex]);
  }
});

//delete book
app.delete("/books/:id", (req, res) => {
  const idd = parseInt(req.params.id);
  const foundBookIndex = books.findIndex((book) => book.id === idd);
  if (foundBookIndex === -1) {
    res.status(404).json("Book not Found");
  } else {
    books.splice(foundBookIndex, 1);
    res.status(200);
  }
});

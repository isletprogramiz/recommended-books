import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDataBase = {
  mathematics: [
    {
      name: "R D Sharma",
      rating: "4/5",
      description:
        "The RD Sharma book is a gem for Mathematics lovers. It is one of the best books that provide complete information and knowledge of each and every concept that ..."
    },
    {
      name: " R S Aggarwal",
      rating: "4.5/5",
      description:
        "In RS Aggarwal Solutions all questions are solved and explained by expert Mathematic teachers as per CBSE board guidelines."
    },
    {
      name: "NCERT",
      rating: "5/5",
      description:
        "Maths are solved by experts of LearnCBSE.in in order to help students to obtain excellent marks in their board examination."
    }
  ],

  science: [
    {
      name: "Resnick Halliday",
      rating: "4.5/5",
      description: "this book will make you master in concepts of Physics"
    },

    {
      name: "RC Mukherjee",
      rating: "5/5",
      description:
        "RC Mukherjee Chemistry is one of the best Physical Chemistry books for JEE exam preparation when it comes to numerical problems."
    }
  ],

  english: [
    {
      name: "Wren & Martin",
      rating: "5/5",
      description:
        "Wren and Martin's High School English Grammar & Composition is one of the most popular and widely used reference books on English Grammar."
    },
    {
      name: "Word Power Made Easy",
      rating: "5/5",
      description:
        "  Word Power Made Easy is a comprehensive vocabulary‑building that provides a simple, step‑by‑step method to increase your knowledge and mastery of the English language."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("mathematics");
  function clickGenreHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        {" "}
        📚{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>
          Recommended <span style={{ color: "red" }}>Books</span>
        </span>
      </h1>
      {"  "}
      <small> Checkout my favourite books. Select a genre to get started</small>
      {"  "}
      <div>
        {Object.keys(bookDataBase).map((genre) => (
          <button
            onClick={() => clickGenreHandler(genre)}
            style={{
              cursor: "pointer",
              padding: "0.5rem",
              backgroundColor: "yellow",
              borderRadius: "0.5rem",
              border: "0.5px solid red",
              margin: "1rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingRight: "2rem" }}>
          {bookDataBase[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid gray",
                width: "70%",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div>{book.name}</div>
              <div>{book.rating}</div>
              <div>{book.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

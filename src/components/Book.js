import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import IconBook from "../images/icon-book.inline.svg";
import IconEBook from "../images/icon-e-book.inline.svg";
import IconAudioBook from "../images/icon-audio-book.inline.svg";
import Award from "../images/award.inline.svg";
import "./Book.scss";

const Book = ({ book }) => {
  return (
    <>
      <div className="book-wrapper">
        <div className="book-img">{book.img}</div>

        <div className="book-info">
          <h3>{book.name}</h3>
          <div>{book.englishName} </div>
          <div>
            {book.author}, {book.year}
          </div>
          <hr />
          <div className="description">{book.description} </div>
          {book.awards && (
            <div className="awards">
              {book.awards?.map((award) => (
                <div>
                  <Award className="award" />
                  {award}
                </div>
              ))}
            </div>
          )}
          {book.likes && (
            <div className="likes">
              {book.likes?.map((like) => (
                <li>{like}</li>
              ))}
            </div>
          )}
          {book.dislikes && (
            <div className="dislikes">
              {book.dislikes?.map((dislike) => (
                <li>{dislike}</li>
              ))}
            </div>
          )}
          {book.more && <div>{book.more}</div>}
          {/*           <hr />
          <div className="book-icons-wrapper">
            <div>
              {`Chcete se dozvědět víc, případně si knihu zakoupit? ${
                book.buyaudiobookCz
                  ? "Nebo si poslechnout ukázku z audioknihy?"
                  : ""
              }`}
            </div>
            <div className="book-icons">
              <a href={book.buybookCz} title="papírová kniha">
                <IconBook className="book-icon" />
              </a>

              {book.buyebookCz && (
                <a href={book.buyebookCz} title="e-kniha">
                  <IconEBook className="book-icon" />
                </a>
              )}
              {book.buyaudiobookCz && (
                <a href={book.buyaudiobookCz} title="audio-kniha">
                  <IconAudioBook className="book-icon" />
                </a>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Book;

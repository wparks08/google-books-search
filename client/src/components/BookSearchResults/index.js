import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Book from "../Book";
import BookContext from "../../utils/BookContext";

function BookSearchResults(props) {
    return props.books.length > 1 ? (
        props.books.map(book => {
            let bookInfo = {
                title: book.volumeInfo.title,
                subtitle: book.volumeInfo.subtitle,
                authors: book.volumeInfo.authors,
                image: book.volumeInfo.imageLinks
                    ? book.volumeInfo.imageLinks.thumbnail
                    : "https://via.placeholder.com/128?text=No+Image",
                description: book.volumeInfo.description,
                link: book.volumeInfo.previewLink
            };

            return (
                <BookContext.Provider value={bookInfo} key={book.id}>
                    <Book />
                </BookContext.Provider>
            );
        })
    ) : (
        <Typography variant="caption">(No results)</Typography>
    );
}

BookSearchResults.propTypes = {
    books: PropTypes.array
};

export default BookSearchResults;

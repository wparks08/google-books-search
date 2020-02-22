import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Book from "../Book";

function BookSearchResults(props) {
    return props.books.length > 1 ? (
        props.books.map(book => {
            return (
                <Book
                    title={book.volumeInfo.title}
                    subtitle={book.volumeInfo.subtitle}
                    authors={book.volumeInfo.authors}
                    image={
                        book.volumeInfo.imageLinks
                            ? book.volumeInfo.imageLinks.thumbnail
                            : "https://via.placeholder.com/128?text=No+Image"
                    }
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.previewLink}
                    key={book.id}
                    saved={false}
                />
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

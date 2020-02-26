import React from "react";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import PropTypes from "prop-types";
import Book from "../Book";

function BookSearchResults(props) {
    return props.totalItems > 1 ? (
        <>
            <Typography variant="caption">Results: {props.totalItems}</Typography>
            {props.books.map(book => {
                return (
                    <Book
                        title={book.title}
                        subtitle={book.subtitle}
                        authors={book.authors}
                        image={book.image}
                        description={book.description}
                        link={book.link}
                        saved={book.saved}
                        key={book.link}
                    />
                );
            })}
            <Pagination count={Math.floor(props.totalItems / props.max)} onChange={props.handleChange} />
        </>
    ) : (
        <Typography variant="caption">(No results)</Typography>
    );
}

BookSearchResults.propTypes = {
    books: PropTypes.array,
    totalItems: PropTypes.number,
    max: PropTypes.number
};

export default BookSearchResults;

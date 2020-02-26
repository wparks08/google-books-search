import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Book from "../../components/Book";
import { Container } from "@material-ui/core";
import Hero from "../../components/Hero";

function Saved() {
    const [savedBooks, setSavedBooks] = useState([]);
    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        API.findAll().then(books => setSavedBooks(books));
    };

    return (
        <Container>
            <Hero primary="Saved Books" />
            {savedBooks.map(book => {
                return (
                    <Book
                        id={book._id}
                        title={book.title}
                        subtitle={book.subtitle}
                        authors={book.authors}
                        image={book.image}
                        description={book.description}
                        link={book.link}
                        saved={true}
                        key={book._id}
                    />
                );
            })}
        </Container>
    );
}

export default Saved;

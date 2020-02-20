import React from "react";
import Hero from "../../components/Hero";
import { Container } from "@material-ui/core";
import BookSearch from "../../components/BookSearch";

function Search() {
    return (
        <Container>
            <Hero />
            <BookSearch />
            <div>Search bar</div>
            <div>
                Results
                <div>
                    book
                    <div>Book info</div>
                    <div>Book actions (right - view/save)</div>
                    <div>Book picture</div>
                    <div>Book description</div>
                </div>
            </div>
        </Container>
    );
}

export default Search;

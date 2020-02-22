import React from "react";
import Hero from "../../components/Hero";
import Container from "@material-ui/core/Container";
import BookSearch from "../../components/BookSearch";

function Search() {
    return (
        <Container>
            <Hero primary="Google Books Search" secondary="Search for and save Books of interest" />
            <BookSearch />
        </Container>
    );
}

export default Search;

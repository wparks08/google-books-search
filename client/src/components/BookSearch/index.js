import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import BookSearchForm from "../BookSearchForm";
import BookSearchResults from "../BookSearchResults";
import API from "../../utils/API";

function BookSearch() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };

    const handleSubmit = event => {
        //TODO: Put this api call on the backend, and hide API key
        event.preventDefault();

        API.search(search).then(books => setResults(books));
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <BookSearchForm search={search} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                <BookSearchResults books={results} />
            </Grid>
        </Grid>
    );
}

export default BookSearch;

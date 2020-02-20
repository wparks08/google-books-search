import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import BookSearchForm from "../BookSearchForm";

function BookSearch() {
    const [query, setQuery] = useState({
        search: "",
        results: []
    });

    const handleInputChange = event => {
        setQuery({ ...query, search: event.target.value });
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <BookSearchForm search={query.search} handleInputChange={handleInputChange} />
            </Grid>
        </Grid>
    )
}

export default BookSearch;

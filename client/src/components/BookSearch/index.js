import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import BookSearchForm from "../BookSearchForm";
import BookSearchResults from "../BookSearchResults";
import API from "../../utils/API";

function BookSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [page, setPage] = useState(1);
    const [max, setMax] = useState(10);

    useEffect(() => {
        if (query) {
            search();
        }
    }, [page]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        search();
    };

    const handlePaginationChange = (event, value) => {
        setPage(value);
    };

    const handleMaxChange = event => {
        const { value } = event.target;
        setMax(value);
    };

    const search = () => {
        let offset = page * max - max;
        console.log("searching");
        API.search(query, max, offset).then(data => {
            setResults(data.books);
            if (offset === 0) {
                setTotalItems(data.totalItems);
            }
        });
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <BookSearchForm
                    query={query}
                    max={max}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleMaxChange={handleMaxChange}
                />
                <BookSearchResults
                    totalItems={totalItems}
                    max={max}
                    books={results}
                    handlePaginationChange={handlePaginationChange}
                />
            </Grid>
        </Grid>
    );
}

export default BookSearch;

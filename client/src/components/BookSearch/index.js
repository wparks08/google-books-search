import React, { useCallback, useEffect, useState } from "react";
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

    const search = useCallback(() => {
        let offset = page * max - max;
        API.search(query, max, offset).then(data => {
            setResults(data.books);
            if (offset === 0) {
                //Google books API is a little broken. Returns varying totalItems when paginating, and not in a predictable way.
                //Setting totalItems only when we're on the first page of results as a not-very-good workaround.
                setTotalItems(data.totalItems);
            }
        });
    }, [query, page, max]);

    useEffect(() => {
        const timeoutID = setTimeout(search, 500);
        return () => clearTimeout(timeoutID);
    }, [search]);

    const handleInputChange = event => {
        setQuery(event.target.value);
    };

    const handlePaginationChange = (event, value) => {
        setPage(value);
    };

    const handleMaxChange = event => {
        const { value } = event.target;
        setMax(value);
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <BookSearchForm
                    query={query}
                    max={max}
                    handleInputChange={handleInputChange}
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

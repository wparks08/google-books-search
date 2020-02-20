import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    formWrapper: {
        display: "flex",
        flexWrap: "wrap",
        padding: theme.spacing
    }
}));

function BookSearchForm(props) {
    return (
        <Paper elevation={1}>
            <form autoComplete="off">
                <FormControl fullWidth>
                    <InputLabel htmlFor="search-input">Search...</InputLabel>
                    <Input id="search-input" fullWidth value={props.search} onChange={props.handleInputChange} />
                </FormControl>
            </form>
        </Paper>
    );
}

BookSearchForm.propTypes = {
    search: PropTypes.string,
    handleInputChange: PropTypes.func
};

export default BookSearchForm;

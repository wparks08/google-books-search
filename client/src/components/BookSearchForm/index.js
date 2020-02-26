import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
    formWrapper: {
        display: "flex",
        flexWrap: "wrap",
        padding: theme.spacing(2),
        margin: theme.spacing(2)
    },
    form: {
        width: "100%"
    },
    centerText: {
        textAlign: "center"
    }
}));

function BookSearchForm(props) {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={1} className={classes.formWrapper}>
                    <form autoComplete="off" className={classes.form} onSubmit={props.handleSubmit}>
                        <FormGroup>
                            <FormControl fullWidth>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <InputLabel htmlFor="search-input">Search...</InputLabel>
                                        <Input
                                            id="search-input"
                                            fullWidth
                                            value={props.query}
                                            onChange={props.handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={1} className={classes.centerText}>
                                        <IconButton color="primary" type="submit">
                                            <SearchIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <FormControl>
                                            <InputLabel id="max-results">Max</InputLabel>
                                            <Select labelId="max-results" id="max-results-select" value={props.max} onChange={props.handleMaxChange}>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={20}>20</MenuItem>
                                                <MenuItem value={30}>30</MenuItem>
                                                <MenuItem value={40}>40</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </FormControl>

                        </FormGroup>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
}

BookSearchForm.propTypes = {
    query: PropTypes.string,
    max: PropTypes.number,
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleMaxChange: PropTypes.func
};

export default BookSearchForm;

import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

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
                    <form autoComplete="off" className={classes.form}>
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
                                    <Grid item xs={1} />
                                    <Grid item xs={1}>
                                        <FormControl fullWidth>
                                            <Select value={props.max} onChange={props.handleMaxChange}>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={20}>20</MenuItem>
                                                <MenuItem value={30}>30</MenuItem>
                                                <MenuItem value={40}>40</MenuItem>
                                            </Select>
                                            <FormHelperText>Results per page</FormHelperText>
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
    handleMaxChange: PropTypes.func
};

export default BookSearchForm;

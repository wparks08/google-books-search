import * as PropTypes from "prop-types";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { BookInfo } from "../BookInfo";
import { BookActions } from "../BookActions";
import { BookImage } from "../BookImage";
import { BookDescription } from "../BookDescription";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        padding: theme.spacing(3)
    },
    actions: {
        textAlign: "right"
    }
}));

function Book(props) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={3}>
            <Grid container item>
                <Grid item md={10}>
                    <BookInfo />
                </Grid>
                <Grid item md={2} className={classes.actions}>
                    <BookActions />
                </Grid>
            </Grid>
            <Grid container item justify={"center"}>
                <Grid item md={2}>
                    <BookImage />
                </Grid>
                <Grid item md={10}>
                    <BookDescription description={props.description} />
                </Grid>
            </Grid>
        </Grid>
    );
}

Book.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    authors: PropTypes.array,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    saved: PropTypes.bool
};

export default Book;

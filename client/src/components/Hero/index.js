import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: theme.spacing(2),
        padding: theme.spacing(7),
        textAlign: "center"
    }
}));

function Hero() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={2} className={classes.hero}>
                    <Typography variant="h3" gutterBottom>
                        Google Books Search
                    </Typography>
                    <Typography variant="h5">Search for and save Books of interest</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Hero;

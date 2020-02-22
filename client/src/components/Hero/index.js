import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    hero: {
        margin: theme.spacing(2),
        padding: theme.spacing(7),
        textAlign: "center"
    }
}));

function Hero(props) {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={2} className={classes.hero}>
                    <Typography variant="h3" gutterBottom>
                        {props.primary}
                    </Typography>
                    <Typography variant="h5">{props.secondary}</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

Hero.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string
};

export default Hero;

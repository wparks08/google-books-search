import * as PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    flexCenter: {
        display: "flex",
        margin: "auto"
    }
}));

export function BookImage(props) {
    const classes = useStyles();

    return <img src={props.image} alt={props.alt} className={classes.flexCenter} />;
}

BookImage.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string
};

export default BookImage;

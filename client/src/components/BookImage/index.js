import * as PropTypes from "prop-types";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BookContext from "../../utils/BookContext";

const useStyles = makeStyles(theme => ({
    flexCenter: {
        display: "flex",
        margin: "auto"
    }
}));

export function BookImage() {
    const classes = useStyles();
    const { image, title } = useContext(BookContext);

    return <img src={image} alt={title} className={classes.flexCenter} />;
}

BookImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

export default BookImage;

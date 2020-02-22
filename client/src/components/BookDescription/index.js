import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import React, { useContext } from "react";
import BookContext from "../../utils/BookContext";

export function BookDescription() {
    const { description } = useContext(BookContext);

    return <Typography>{description}</Typography>;
}

BookDescription.propTypes = { description: PropTypes.string };

export default BookDescription;

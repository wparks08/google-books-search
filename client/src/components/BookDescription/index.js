import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import React from "react";

export function BookDescription(props) {
    return <Typography {...props}>{props.description}</Typography>;
}

BookDescription.propTypes = { description: PropTypes.string };

export default BookDescription;

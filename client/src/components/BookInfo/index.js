import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import React from "react";

export function BookInfo(props) {
    return (
        <>
            <Typography>{props.title}</Typography>
            <Typography variant="body2">{props.subtitle}</Typography>
            <Typography variant="caption">{props.authors ? props.authors.join(", ") : ""}</Typography>
        </>
    );
}

BookInfo.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.any)
};

export default BookInfo;

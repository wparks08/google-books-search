import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import React, { useContext } from "react";
import BookContext from "../../utils/BookContext";

export function BookInfo() {
    const { title, subtitle, authors } = useContext(BookContext);

    return (
        <>
            <Typography>{title}</Typography>
            <Typography variant="body2">{subtitle}</Typography>
            <Typography variant="caption">{authors ? authors.join(", ") : ""}</Typography>
        </>
    );
}

BookInfo.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.any)
};

export default BookInfo;

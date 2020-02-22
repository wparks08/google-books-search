import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";
import React, { useContext } from "react";
import BookContext from "../../utils/BookContext";

export function BookActions() {
    const { link, saved } = useContext(BookContext);

    return (
        <>
            {link ? <Button onClick={() => window.open(link, "_blank")}>View</Button> : ""}
            {saved ? <Button>Delete</Button> : <Button>Save</Button>}
        </>
    );
}

BookActions.propTypes = {
    link: PropTypes.string,
    view: PropTypes.bool,
    save: PropTypes.bool,
    delete: PropTypes.bool
};

export default BookActions;

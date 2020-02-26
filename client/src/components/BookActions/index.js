import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";
import React from "react";

export function BookActions(props) {
    return (
        <>
            {props.link ? <Button onClick={() => window.open(props.link, "_blank")}>View</Button> : ""}
            {props.saved ? (
                <Button onClick={props.deleteBook}>Delete</Button>
            ) : (
                <Button onClick={props.saveBook}>Save</Button>
            )}
        </>
    );
}

BookActions.propTypes = {
    link: PropTypes.string,
    saved: PropTypes.bool,
    saveBook: PropTypes.func,
    deleteBook: PropTypes.func
};

export default BookActions;

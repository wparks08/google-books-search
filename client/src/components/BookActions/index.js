import Button from "@material-ui/core/Button";
import * as PropTypes from "prop-types";
import React from "react";

export function BookActions(props) {
    return (
        <>
            {props.view ? <Button onClick={() => window.open(props.link, "_blank")}>View</Button> : ""}
            {props.save ? <Button>Save</Button> : ""}
            {props.delete ? <Button>Delete</Button> : ""}
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

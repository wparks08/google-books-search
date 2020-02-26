import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React from "react";
import { Notification } from "../Notification";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    }
}));

function TopBar(props) {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            className={clsx(props.classes.appBar, {
                [props.classes.appBarShift]: props.open
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.onClick}
                    edge="start"
                    className={clsx(props.classes.menuButton, {
                        [props.classes.hide]: props.open
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Google Books Search
                </Typography>
                <div className={classes.grow} />
                <Notification />
            </Toolbar>
        </AppBar>
    );
}

TopBar.propTypes = {
    classes: PropTypes.any,
    open: PropTypes.bool,
    onClick: PropTypes.func
};

export default TopBar;

import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import React from "react";

export function SideBar(props) {
    return (
        <Drawer
            variant="permanent"
            className={clsx(props.classes.drawer, {
                [props.classes.drawerOpen]: props.open,
                [props.classes.drawerClose]: !props.open
            })}
            classes={{
                paper: clsx({
                    [props.classes.drawerOpen]: props.open,
                    [props.classes.drawerClose]: !props.open
                })
            }}
        >
            <div className={props.classes.toolbar}>
                <IconButton onClick={props.onClick}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {props.navItems.map(navItem => (
                    <ListItem button key={navItem.text}>
                        <ListItemIcon>{navItem.icon}</ListItemIcon>
                        <ListItemText primary={navItem.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

SideBar.propTypes = {
    classes: PropTypes.any,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    navItems: PropTypes.array
};

export default SideBar;

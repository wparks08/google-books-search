import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SaveIcon from "@material-ui/icons/Save";
import SearchIcon from "@material-ui/icons/Search";

const drawerNavItems = [
    {
        text: "Search",
        icon: <SearchIcon />,
        href: "/"
    },
    {
        text: "Saved",
        icon: <SaveIcon />,
        href: "/saved"
    }
];

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
                {drawerNavItems.map(navItem => (
                    <ListItem button component={NavLink} exact to={navItem.href} key={navItem.text}>
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
    onClick: PropTypes.func
};

export default SideBar;

import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SaveIcon from "@material-ui/icons/Save";
import PropTypes from "prop-types";
import TopBar from "../TopBar";
import SideBar from "../SideBar";
import useStyles from "./styles";

const drawerNavItems = [
    {
        text: "Search",
        icon: <SearchIcon />
    },
    {
        text: "Saved",
        icon: <SaveIcon />
    }
];

function Layout(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <TopBar classes={classes} open={open} onClick={handleDrawerOpen} />
            <SideBar classes={classes} open={open} onClick={handleDrawerClose} navItems={drawerNavItems} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {props.children}
            </main>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.any
};

export default Layout;

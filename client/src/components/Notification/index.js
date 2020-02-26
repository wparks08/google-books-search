import { IconButton, Menu, Snackbar } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useEffect, useState } from "react";
import socket from "../../utils/socketIO";

export function Notification() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [notifications, setNotifications] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [notificationMsg, setNotificationMsg] = useState("");

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setSnackbarOpen(false);
    };

    useEffect(() => {
        socket.on("notification", message => {
            setNotifications(
                [].concat(
                    <MenuItem onClick={handleMenuClose} key={new Date()}>
                        {message}
                    </MenuItem>,
                    ...notifications
                )
            );
            setNotificationMsg(message);
            setSnackbarOpen(true);
        });

        return () => {
            socket.off("notification"); //prevent memory leak
        };
    });

    return (
        <>
            <IconButton color="inherit" onClick={handleMenu} aria-controls="notifications-menu">
                <Badge badgeContent={notifications.length} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                id="notifications-menu"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={handleMenuClose}
            >
                {notifications}
            </Menu>
            <Snackbar
                open={snackbarOpen}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={notificationMsg}
                action={
                    <>
                        <IconButton size="small" color="inherit" onClick={handleSnackbarClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </>
                }
            />
        </>
    );
}

export default Notification;

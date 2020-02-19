import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;

function getTransition(theme, props, duration) {
    return theme.transitions.create(props, {
        easing: theme.transitions.easing.sharp,
        duration: duration
    });
}

function getLeavingTransition(theme, props) {
    return getTransition(theme, props, theme.transitions.duration.leavingScreen);
}

function getEnteringTransition(theme, props) {
    return getTransition(theme, props, theme.transitions.duration.enteringScreen);
}

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: getLeavingTransition(theme, ["width", "margin"])
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: getEnteringTransition(theme, ["width", "margin"])
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: getEnteringTransition(theme, "width")
    },
    drawerClose: {
        transition: getLeavingTransition(theme, "width"),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

export default useStyles;

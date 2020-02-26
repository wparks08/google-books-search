import * as PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { BookInfo } from "../BookInfo";
import { BookActions } from "../BookActions";
import { BookImage } from "../BookImage";
import { BookDescription } from "../BookDescription";
import API from "../../utils/API";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        padding: theme.spacing(3)
    },
    actions: {
        textAlign: "right"
    }
}));

function Book(props) {
    const classes = useStyles();
    const [book, setBook] = useState({
        id: props.id || "",
        title: props.title,
        subtitle: props.subtitle,
        authors: props.authors,
        image: props.image,
        description: props.description,
        link: props.link
    });
    const [saved, setSaved] = useState(props.saved || false);

    useEffect(() => {
        checkBookAlreadySaved().then(result => {
            setSaved(result.saved);
            setBook({ ...book, id: result.id });
        });
    }, []);

    const saveBook = () => {
        API.save(book)
            .then(response => {
                console.log(response);
                setSaved(true);
                setBook({ ...book, id: response._id });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const deleteBook = () => {
        API.delete(book.id)
            .then(() => {
                setSaved(false);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const checkBookAlreadySaved = () => {
        return new Promise((resolve, reject) => {
            API.findAll()
                .then(savedBooks => {
                    savedBooks.forEach(savedBook => {
                        if (savedBook.link === book.link) {
                            resolve({ saved: true, id: savedBook._id });
                        }
                    });
                    resolve({ saved: false, id: "" });
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    return (
        <Grid container className={classes.root} spacing={3}>
            <Grid container item>
                <Grid item md={10}>
                    <BookInfo title={book.title} subtitle={book.subtitle} authors={book.authors} />
                </Grid>
                <Grid item md={2} className={classes.actions}>
                    <BookActions
                        saved={saved}
                        link={book.link}
                        id={book.id}
                        setSaved={setSaved}
                        saveBook={saveBook}
                        deleteBook={deleteBook}
                    />
                </Grid>
            </Grid>
            <Grid container item justify={"center"}>
                <Grid item md={2}>
                    <BookImage image={props.image} alt={props.title} />
                </Grid>
                <Grid item md={10}>
                    <BookDescription description={props.description} />
                </Grid>
            </Grid>
        </Grid>
    );
}

Book.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    authors: PropTypes.array,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    saved: PropTypes.bool
};

export default Book;

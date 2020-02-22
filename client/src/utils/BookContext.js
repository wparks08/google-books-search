import React from "react";

const BookContext = React.createContext({
    title: "",
    subtitle: "",
    authors: [],
    description: "",
    image: "",
    link: "",
    saved: false
});

export default BookContext;

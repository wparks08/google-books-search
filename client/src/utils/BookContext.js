import React from "react";

const BookContext = React.createContext({
    title: "",
    subtitle: "",
    authors: [],
    description: "",
    image: "",
    link: "",
    saved: false,
    toggleSaved: () => {}
});

export default BookContext;

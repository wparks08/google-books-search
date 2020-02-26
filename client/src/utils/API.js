const API = {
    search: (query, max, offset) => {
        return new Promise((resolve, reject) => {
            fetch("/api/search/google?q=" + query + "&max=" + max + "&offset=" + offset)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    const data = {
                        totalItems: json.totalItems,
                        books: []
                    };
                    if (json.items) {
                        data.books = json.items.map(item => mapItemToBook(item));
                    }
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },

    findAll: () => {
        return new Promise((resolve, reject) => {
            fetch("/api/book").then(response => handleResponse(response, resolve, reject));
        });
    },

    save: book => {
        const init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        };

        return new Promise((resolve, reject) => {
            fetch("/api/book", init).then(response => handleResponse(response, resolve, reject));
        });
    },

    delete: id => {
        const init = {
            method: "DELETE"
        };

        return new Promise((resolve, reject) => {
            fetch(`/api/book/${id}`, init).then(response => handleResponse(response, resolve, reject));
        });
    }
};

const handleResponse = (response, resolve, reject) => {
    response
        .json()
        .then(json => {
            resolve(json);
        })
        .catch(err => {
            reject(err);
        });
};

const mapItemToBook = item => {
    return {
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle,
        authors: item.volumeInfo.authors,
        image: item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/128?text=No+Image",
        description: item.volumeInfo.description,
        link: item.volumeInfo.previewLink,
        saved: false
    };
};

export default API;

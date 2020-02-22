const API = {
    search: query => {
        return new Promise((resolve, reject) => {
            fetch(
                "https://www.googleapis.com/books/v1/volumes?q=" +
                    query +
                    "&key="
            )
                .then(response => {
                    return response.json();
                })
                .then(result => {
                    resolve(result.items);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};

export default API;

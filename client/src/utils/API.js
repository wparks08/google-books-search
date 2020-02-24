const API = {
    search: query => {
        return new Promise((resolve, reject) => {
            fetch("/api/search/google?q=" + query)
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    resolve(json);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};

export default API;

const config = {
    username: encodeURIComponent('cschetan77'),
    password: encodeURIComponent('Rupanzel77@'),
};

const getURI = (username, password) => {
    if(username && password) {
        username = encodeURIComponent(username);
        password = encodeURIComponent(password);
        return `mongodb+srv://${username}:${password}@reactapp.nsxhxvy.mongodb.net/?retryWrites=true&w=majority`
    }
    else {
        return `mongodb+srv://${config.username}:${config.password}@reactapp.nsxhxvy.mongodb.net/?retryWrites=true&w=majority`
    }
};

export {
    getURI,
};

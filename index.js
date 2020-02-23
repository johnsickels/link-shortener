const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost/url-shortener";
const connectOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const app = express();
app.use(bodyParser.json());
const PORT = 7000;

require("./models/UrlShorten");
require("./routes/urlshorten")(app);

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
    if (err) console.log("Error", err);
    console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
    console.log(`Server listening on port`, PORT);
});



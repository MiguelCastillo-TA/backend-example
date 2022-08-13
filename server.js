const express = require("express");
require("./config/mongoose.config");

const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const port = 8000;

const AllUserRoutes = require('./routes/user.route');
AllUserRoutes(app)

app.listen( port, () => console.log(`Listening on port: ${port}`) );
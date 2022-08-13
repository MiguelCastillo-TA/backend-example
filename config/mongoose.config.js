const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fakerDB',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Established a connection to database'))
.catch((err) => console.log('SOMETHING WENT WRONG'))

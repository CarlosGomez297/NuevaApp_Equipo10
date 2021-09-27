const mongoose = require('mongoose');

const user = 'dataBase_Conection';
const password = '5uDSYjMUGRHoH4CD';
const dbname = 'proyectDB';
const uri = `mongodb+srv://${user}:${password}@cluster0.x7dka.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,{ 
    useNewUrlParser: true, useUnifiedTopology: true}
    )
        .then(() => console.log('Db is connected'))
        .catch(e => console.log(e));

module.exports = mongoose;
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

// seccion de Settings

app.set('port', process.env.PORT || 3000);

// seccion de Middlewares
app.use(morgan('dev'));
app.use(express.json());

// seccion de Routes o urls
app.use('/api/students', require('./routes/task.routes'));
// route para leaders
app.use('/api/leaders', require('./routes/leaders.routes'));
// route para proyects
app.use('/api/proyects', require('./routes/proyects.routes'));


// seccion de Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting de server o iniciando el servidor
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});
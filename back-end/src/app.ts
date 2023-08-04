import express from 'express';

//router
import home from '../routes/home';

const app = express();

app.use('/', home);

app.listen(3000, function() {
    console.log('Servidor on fire')
})
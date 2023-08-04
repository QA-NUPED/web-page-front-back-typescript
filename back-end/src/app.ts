import express from 'express';
import cors from 'cors';

//router
import home from '../routes/home';
import user from '../routes/user';

const app = express();

app.use(cors({
    origin:['http://localhost:5000']
}))

app.use('/', home);
app.use('/user', user);

app.listen(3000, function() {
    console.log('Servidor on fire')
})
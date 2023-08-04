import {Request, Response} from 'express';

const store = function(request:Request, response:Response) {
    response.send('{"user":"create"}')
}

export {store};
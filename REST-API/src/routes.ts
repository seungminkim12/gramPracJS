import {Express,Request,Response} from 'express';
import { createdUserHandler } from './controller/user.controller';
import { createUserSchema } from './schema/user.schema';
import validateResource from './middleware/validateResource';

function routes(app:Express){
    app.get('/healthcheck' , (req:Request, res:Response) => res.sendStatus(200))

    app.post('/api/users',validateResource(createUserSchema), createdUserHandler)
}

export default routes;
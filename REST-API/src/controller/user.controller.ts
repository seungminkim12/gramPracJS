import { Request,Response } from "express";
import { CreateUserInput } from "src/schema/user.schema";
import { createUser } from "../service/user.service";
import logger from '../utils/logger';

export async function createdUserHandler(req:Request<{},{},CreateUserInput['body']>,res:Response){    
    try{
        const user = await createUser(req.body);  //call create user service
        return res.send(user);
    }catch(e: any){
        logger.error(e);
        return res.status(409).send(e.message)
    }
}
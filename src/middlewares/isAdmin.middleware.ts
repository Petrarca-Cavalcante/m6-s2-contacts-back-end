import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/appError";

export const isAdminMiddleware = async(req:Request,res:Response,next:NextFunction)=>{
    const isAdm = req.user.isAdm

    if(!isAdm){
        throw new AppError("is not admin",403)
    }

    next()

}
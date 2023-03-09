import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger.util";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { SECRET_KEY } from "../constants";

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.get('Authorization')

        if (!authHeader) {
            logger.error("Unauthorized request")
            res.status(401).json({
                message: "Unauthorized"
            })
            return;
        }

        const token = authHeader.split(' ')[1]

        if (!token || token === '') {
            logger.error("Unauthorized request")
            res.status(401).json({
                message: "Unauthorized"
            })
            return;
        }

        const decodedToken: any = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decodedToken;
        next()

    } catch (error: any) {
        logger.error(error, "Unauthorized request")
        res.status(401).json({
            message: "Unauthorized"
        })
    }
}
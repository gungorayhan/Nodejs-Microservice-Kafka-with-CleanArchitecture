import express,{Request,Response,NextFunction} from "express"

const router = express.Router();

router.post('/product',async(req:Request,res:Response,next:NextFunction)=>{
    return res.status(200).json({})
})

export default router
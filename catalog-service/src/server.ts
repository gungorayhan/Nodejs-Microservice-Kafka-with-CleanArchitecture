import expressApp from "./expressApp"
import { logger } from "./utils";

const PORT = process.env.PORT || 8000; 

export const StartServer= async ()=>{

    expressApp.listen(PORT,()=>{
        // console.log(`App is listening to ${PORT}`)
        logger.info((`App is listening to ${PORT}`))
    })

    process.on("uncaughtException", async (error)=>{
        // console.log(error)
        logger.info(error)
        process.exit(1)
    })

}

StartServer().then(()=>{
    // console.log("server is up")
    logger.info("server is up")
})


// [14:19:05.885] INFO: App is listening to 8000
//     serviceName: "catalog-service"
// [14:19:05.885] INFO: server is up
//     serviceName: "catalog-service"
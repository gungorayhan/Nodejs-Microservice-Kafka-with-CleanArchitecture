import expressApp from "./expressApp"

const PORT = process.env.PORT || 8000; 

export const StartServer= async ()=>{

    expressApp.listen(PORT,()=>{
        console.log(`App is listening to ${PORT}`)
    })

    process.on("uncaughtException", async (error)=>{
        console.log(error)
        process.exit(1)
    })

}

StartServer().then(()=>{
    console.log("server is up")
})
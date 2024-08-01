const http = require("http")
const io = http.createServer((req,res)=>{
    res.end("Nikhil Gehlot")

})

io.listen(8000,()=>{
    console.log("Server is running ")
})
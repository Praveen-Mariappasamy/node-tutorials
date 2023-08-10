const http = require('http')
const f = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to home page")
    }
    if(req.url==='/about'){
        res.end("Im praveen")
    }
    res.end(`
        <h1>Sorry!</h1>
        <p>couldnt process request</p>
        <a href='/'>back home</a>    
        `  
    )
})
f.listen(5000)
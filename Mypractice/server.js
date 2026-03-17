const http = require ("http");
const user = {
    name : "Vishnu Chaudhary",
    age: "20",
};
const server = http.createServer ((req,res) =>{
    const method = req.method;
    const url = new url (req.url,"http://${req.header.host}");
    console.log(method,url);
    if(method =="GET" && url.pathname =="/user"){
        res.writeHead(200,{"Content-Type": "application/json"});
        res.end(JSON.stringify(user));
    }
    if(method == "POST" && url.pathname =="/user"){
        const body = "";
        req.on("data",(chunk) => {
            body+= chunk;
        })
        req.on("end",() =>{
            fs.appendFile("./file.txt",body,()=>{
                res.writeHead(201,"data written")
                res.end();
            })
        })
    }

});

server.listen(3000,() =>{console.log("Server Created")});
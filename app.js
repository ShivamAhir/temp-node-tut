// const amount=9;
// if(amount<10)
// console.log('number is small');
// else
// console.log('number is large');

// console.log(`hey it's my first programe`)
// console.log(__dirname)
// console.log(__filename)
const http=require('http');
const server =http.createServer((req,res)=>{

    var url=req.url;
    if(url=='/home')
    res.end('welcome to home page');
    res.end(`<h1>page not found</h1>`);
})
server.listen('5500');
// const { sum } = require("./helper");
// const total = sum(5 , 6);
// console.log("Total: ", total);


// // const http = require('http');
// // const server = http.createServer((req , res) =>{
// //     res.end("this is my first server message updated 12d");
// // })
// // server.listen(3000);

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("this is express response 2");
})
app.listen(3000);


const fs = require('fs');
const fileName = "target.txt"

const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());
 
fs.readFile(fileName , (err,  data) => {
    if(err){
        errHandler(err);
    }
    dataHandler(data);
})
fs.watch(fileName, () => console.log("file changed"));

console.log("Node is working");
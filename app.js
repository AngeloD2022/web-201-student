const express = require('express');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;



let app = express();

function homePage(request, response) {
    fs.readFile("people.json","utf-8",(err,str)=>{
        var json = JSON.parse(str);
        response.render(__dirname+"/people0.ejs",
            {data:{people: json}});
    });
}

app.get('/', homePage);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

function personPage(r, s) {

}

app.listen(port, hostname, listenCallback);
app.set("view engine","ejs");

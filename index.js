//Improt all the packages of node.js
const http = require("http")
const port = 7000;
const fs = require("fs");

// const requestData = (req, res) => {
//     res.setHeader("Content-Type", "text/plan");
//     res.end("hello Node");
// }

function requestData(req, res) {
    if (req.method == "GET") {
        res.statusCode = 200
        res.end("hello");
    } else if (req.method == "POST") {
        res.send("Post req");
    } else {
        res.send("Else loop");
    }
};


// make two more routes for the same, use the switch case to handle all the req

// const requestData = (req, res) => {
//     console.log("req", req.url);
//     if(req.url === "/profile"){
//         fs.readFile("./profile.html", (err,data) =>{
//             if(err){
//                 console.log("Error in profile page", err);
//                 res.end("Ahaa error while fetching the data")
//             }
//             return res.end(data)
//         });
//     }
//     else {
//         fs.readFile("./noData.html",(err, data) => {
//             if(err){
//                 console.log("Error in profile page", err);
//                 res.end("Ahaa error while fetching the data")
//             }
//             return res.end(data)
//         });
//     }
// };

const server = http.createServer(requestData);

// import the file  
const calculator = require("./calculator");
const { url } = require("inspector");
const additon = calculator.add(4,6);
console.log("addition", additon);

const subt = calculator.sub(4,6);
console.log("subt", subt);


console.log("Good morning");

// start server
server.listen(port, (err) => {
    if(err){
        return console.log("error in starting server");
    }
    console.log("server is up and running");
});



// About creating a new branch 
// 1. copy the url
// 2. git clone url
// 3. open the code in your vs code
// 4. checkout a new branch (git checkout -b branchName)
// 5. make your change
// 6. commit and push
// 7. create the PR
// 8. add reviewer to review

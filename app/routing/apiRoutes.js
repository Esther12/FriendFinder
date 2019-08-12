var express = require("express");
var path = require("path");
var fs = require("fs");
var friendData = require("../data/friends");

var app = express.Router();

app.post("/post", function(req,res){
    var newFiendData = req.body;
    console.log(newFiendData);
    //friendData.friendData.push(newFiendData);
    console.log(friendData.friendData);
    var resultArr = [];
    //res.json(friendData.friendData[0]);
    //console.log(newFiendData.scores);
    //console.log(friendData.friendData[0]);
    //console.log(findTheBest(newFiendData.scores,friendData.friendData[0]));
    for(let i = 0; i<friendData.friendData.length; i++){
       //console.log(findTheBest(newFiendData.scores,friendData.friendData[i]));
       resultArr.push(findTheBest(newFiendData.scores,friendData.friendData[i].scores));
    }
    var Maxindex = resultArr.indexOf(Math.min(...resultArr));
    res.json(friendData.friendData[Maxindex]);
    friendData.friendData.push(newFiendData);
});

app.get("/list",function(req,res){
    res.json(friendData.friendData);
});


function findTheBest (userArr,firendsArr){
    // Try edit message
    
    var compairedArray = userArr.map(function(item, index) {
        // item - current value in the loop
        // index - index for this value in the array
        // arr - reference to analyzed array  
        return item - firendsArr[index];
    })

    //in this case we override values in first array
    console.log(compairedArray);
    function Diff(num){ 
            if(num < 0){
            diff = num *(-1);
            }else{
            diff = num;
            }
        return diff;
    }
    var positiveCompairArr = [];
   for(let i= 0; i<compairedArray.length;i++){
    positiveCompairArr.push(Diff(compairedArray[i])); 
   }
    //var x1 = x.map(Diff(x));
    var arrSum = arr => arr.reduce((a,b) => a + b, 0);
    console.log("return arr  " + arrSum(positiveCompairArr));
    return arrSum(positiveCompairArr);  
}

module.exports = app;
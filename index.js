const express = require("express")
var app = express()
app.get("/",function(request,response){
 const responseData = {
      message:"Hello, GFG Learner",
    articleData:{
        articleName: "How to send JSON response from NodeJS",
        category:"NodeJS",
        status: "published"
    },
    endingMessage:"Visit Geeksforgeeks.org for more"
  }
   
  const jsonContent = JSON.stringify(responseData);
response.send(jsonContent);
})
app.listen(10000, function () {
console.log("Started application on port %d", 10000)
});
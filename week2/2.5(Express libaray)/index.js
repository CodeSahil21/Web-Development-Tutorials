const express = require("express");


const app = express();

 
function sum(n){
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans = ans + i;
        
    }
    return ans;
}

app.get("/", function(req, res)  {
    const n = req.query.n;//use take input from user as a query parameter
    const ans = sum(n);
    res.send("Hi your ans is " + ans);
})

app.listen(3000, function()  {
    console.log("Server is running on port 3000");
})
//http://localhost:3000/?n=30


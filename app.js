var express = require("express")
var app = express()
var path = require("path")
var port = 1911
app.get("/today", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"))
})



app.listen(port, function() {
    console.log("server chay tai cong: " + port);
})
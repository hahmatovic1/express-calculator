const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req,res){
  res.sendFile(__dirname +   "/index.html");
})

app.post("/", function(req, res){
    var number1 = Number(req.body.number1);
    var number2 = Number(req.body.number2);
    var operator = req.body.operator;

    var result;
    switch (operator)
    { case "+":
                result = number1 + number2;
                break;
      case "-":
                result = number1 - number2;
                break;
      case "*":
                result = number1 * number2;
                break;
      case "/":
                if(number2 === 0) res.send("Can't divide with 0")
                else {
                  result = number1 / number2
                }
                break
      case "%":
                result = number1 % number2;
                break;
      case "^":
                return Math.pow(number1, number2);
                break;
      default:
                res.send(`Unsupported operator: ` + operator)
    }

    res.send(`The result of the calculation is ` + result);
})

app.listen(3000, function(){
  console.log("Server is running on port 3000")
})

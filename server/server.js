const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.end("<h1>Welcome to my vulnerable server!!</h1>")
})

// symple ReDos
app.post('/login', (req, res) => {
  let data = req.body;
  let pattern = /^(([a-z])+.)+[A-Z]([a-z])+$/;
  let result = pattern.test(data["username"]);

  console.log("username received:",data["username"])
  console.log("password received",data["password"])

  res.send(result);
})

// Vulnerable to regex injection, attacker insert in username field an evil regex and in password a crafted input that implies ReDos.
app.post('/register', (req, res) => {
  let data = req.body;
  username = data["username"]
  password = data["password"]
  
  console.log("username ",username,"password ",password)
  // vulnerable 
  testPassword = new RegExp(username);
  
  match = password.match(testPassword);

  if (match !== null)
    res.send("Password must not contain the user's username!");
  else
    res.send("Ok.");
})

app.listen(3200, () => {
  console.log('Example app listening on port 3200!')
})



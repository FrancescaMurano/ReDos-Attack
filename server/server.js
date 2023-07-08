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
  let pattern2 = /^(([a-z])+.)+[A-Z]([a-z])+$/;
  let result2 = pattern2.test(data["username"]);

  console.log(data["username"])
  console.log(data["password"])

  console.log(result2)
  res.send(result2);
})

// Vulnerable to regex injection, attacker insert in username field an evil regex and in password a crafted input that implies ReDos.
app.post('/register', (req, res) => {
  let data = req.body;
  username = data["username"]
  password = data["password"]
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

// EVIL REGEX TO INSERT ^(([a-z])+.)+[A-Z]([a-z])+$ 

// curl -X POST  http://localhost:3200/register -d "username=^(([a-z])%2B.)%2B[A-Z]([a-z])%2B$&password=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!"


const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/login', (req, res) => {
  let data = req.body;
  let pattern2 = /^(([a-z])+.)+[A-Z]([a-z])+$/;
  let result2 = pattern2.test(data["username"]);
  console.log(result2)

  res.send(result2);
})

app.listen(3200, () => {
  console.log('Example app listening on port 3200!')
})
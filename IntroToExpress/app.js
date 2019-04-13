const express = require('express'); // import 'express'
const app = express();
const port = process.env.PORT;

// routes -
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/bye', (req, res) => res.send('GoodBye !'));

app.get('/dog', function(req, res)
{
    console.log("request for dog");
    res.send("dog!!");
});

// listen -
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
            

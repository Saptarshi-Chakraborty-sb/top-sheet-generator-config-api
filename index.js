
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    return res.status(404).send(null)
}) 

app.post('/', (req, res) => {
    return res.send("Hello");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express');
const app = express();
app.use(express.static('public'))
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('five');
})

app.get('*', (req, res)=>{
    res.render('five');
})
app.listen(port, ()=>{
    console.log(`Game Server is listening on the port ${port}`);
})
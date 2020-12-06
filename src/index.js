const express = require('express')
const app = express()
const port = 8080
const {newsArticleModel}=require('./connector');
const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/newFeeds',(req,res)=>{
    let limit=req.body.limit?req.body.limit:10;
    let offset=req.body.offset?req.body.offset:0;

    newsArticleModel.find().skip(offset).limit(limit).then((ele)=>{
        res.send(ele);
    });
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;

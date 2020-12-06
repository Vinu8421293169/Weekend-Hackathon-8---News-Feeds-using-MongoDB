const express = require('express')
const app = express()
const port = 8080
const {newsArticleModel}=require('./connector');


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/newFeeds',(req,res)=>{
    let limit=10;
    let offset=0;

    newsArticleModel.find().limit(limit).skip(offset).then((ele)=>{
        res.send(ele);
    });
})

app.get('/newFeeds/:limit',(req,res)=>{
    let limit=parseInt(req.params.limit);
    let offset=0;

    newsArticleModel.find().limit(limit).skip(offset).then((ele)=>{
        res.send(ele);
    });
});

app.get('/newFeeds/:limit/:offset',(req,res)=>{
    let limit=parseInt(req.params.limit);
    let offset=parseInt(req.params.offset);

    newsArticleModel.find().limit(limit).skip(offset).then((ele)=>{
        res.send(ele);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;

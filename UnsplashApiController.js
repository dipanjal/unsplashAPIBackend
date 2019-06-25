const router = require('express').Router();
let axios = require('axios');


/**
 * url: /api/unsplash/photos
 * method: post
 */
router.post('/unsplash/photos',(req,res)=>{
    let body = req.body;
    let query = body.query;
    let pageNo = body.page;
    let limit = body.limit?body.limit:10;

    let requestUrl = "https://unsplash.com/napi/search/photos?query="+query+"&xp=&per_page="+limit+"&page="+pageNo;
    console.log(requestUrl);
    axios.get(requestUrl).then(response=>{
        res.json(response.data);
    }).catch(err=>{
        res.status(err.code||500).json(err);
    });
});

router.get('/unsplash',(req,res)=>{
    res.json({
        code:200,
        message:'ok'
    });
});

module.exports = router;
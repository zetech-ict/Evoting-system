const exprees = require('express')
const router = exprees.Router()

//pusher
const Pusher = require("pusher")

const pusher = new Pusher({
    appId: "1272131",
    key: "5eebcaa203111be8fb46",
    secret: "07bc03ca2b5887b9804d",
    cluster: "ap2",
    useTLS: true
  });

//library
router.get('/library', (req, res)=>{
    res.render('library')
})
router.post("/library", (req, res) => {
  console.log(req.body.zt);
  pusher.trigger("zt-poll", "zt-vote", {
    points: 1,
    zt: req.body.zt,
  });
  return res.json({ success: true, message: "thank you for voting" });
});
//campaigns
router.get('/campaigns', (req, res)=>{
    res.render('campaigns')
})

//president
router.get('/president', (req, res)=>{
    res.render('president')
})
router.post("/president", (req, res) => {
  console.log(req.body.zt);
  pusher.trigger("zt-poll", "zt-vote", {
    points: 1,
    zt: req.body.zt,
  });
  return res.json({ success: true, message: "thank you for voting" });
});

//finance
router.get('/finance', (req, res)=>{
    res.render('finance')
})
router.post("/finance", (req, res) =>{
    console.log(req.body.zt)
    pusher.trigger("zt-poll", "zt-vote", {
        points:1,
        zt:req.body.zt
    });
    return res.json({success:true, message:'thank you for voting'})
})
module.exports = router
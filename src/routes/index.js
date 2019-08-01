const express=require('express');
const router=express.Router();


router.get('/',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('index',{title:'Martha te queremos :3'});
});

router.get('/game',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('game',{title:'Martha te queremos :3'});
});

router.get('/',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('index',{title:'Martha te queremos :3'});
});

router.get('/registro',function(req,res){
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
    res.render('registro',{title:'Martha te queremos :3'});
});

module.exports=router;
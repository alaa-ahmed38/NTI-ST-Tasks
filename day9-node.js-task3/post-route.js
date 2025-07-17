const express = require("express");
const  mongoose = require("mongoose");
const router = express.Router();
const post = require('./post-schema');



// -------------- Create Post -----------------------
router.post("/",async(req,res)=>{
    const {userid,title,body}=req.body;
    const newpost = new post({userid,title,body});
    const savepost = await newpost.save();
    res.status(201).json(savepost);
});
// ----------- All Posts --------------
router.get("/",async(req,res)=>{
    const posts = await post.find();
    res.json(posts);
});
// --------------- Post by ID ---------------
router.get("/:id",async(req,res)=>{
    const postid = await post.findById(req.params.id);
    if(!postid) return res.status(404).json({Message:"post not found"});
    res.json(postid);
});
// ------------- Update -------------
router.put("/:id",async(req,res)=>{
    const {title,body}=req.body;
    const updatapost = await Post.findByIdAndUpdate(req.params.id,{title,body});
    if(!updatapost) return res.status(404).json({Message:"post not found"});
    res.json(updatapost);
});
// ------------- Delete --------------
router.delete("/:id",async(req,res)=>{
    const postdelte = await post.findByIdAndDelete(req.params.id);
    if (!postdelte) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post is deleted" });
});


//  -------------- Patsh --------------
router.patch("/:id", async (req, res) => {
    try {const patchPost = await post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });
        if (!patchPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(patchPost);
    } catch (error) {
        res.status(500).json({ error: "Something went wrong", details: error.message });
    }
});

module.exports = router;


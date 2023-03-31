let {Router} = require("express");
const {FeedsModel} = require("../model/Feeds.model");

let FeedsRouter = Router();

FeedsRouter.post("/addfeed", async (req, res) => {
  let {Massage, name} = req.body;
  try {
    let addfeed = new FeedsModel({
      Massage,
      feedAuthor: name,
    });

    await addfeed.save();
    res.status(200).json({msg: "Feed Added Sucessfully"});
  } catch (err) {
    res
      .status(500)
      .json({msg: "something wents wrong to uploading the data", err: err});
  }
});

FeedsRouter.get("/allfeeds", async (req, res) => {
  try {
    let Allfeedspost = await FeedsModel.find();
    res.status(200).send({masg: "All Feeds Data", Allfeeds: Allfeedspost});
  } catch (err) {
    res.status(204).send({msg: "No Data Found ", err: err});
  }
});





FeedsRouter.delete("/deletefeed",async (req, res) => {
  let {feedid} = req.headers;
  try {
      let DeletedData = await FeedsModel.findByIdAndDelete({_id: feedid});
      res.status(200).send({
        msg:"Feed Data Deleted Sucessfully"
    });
  } catch (err) {
    res.status(400).send({msg: "Something Wents Wrong"});
  }
});

// ==========Comment Sections =============

FeedsRouter.patch("/addcomment", async (req, res) => {
  let {CommentMsg, FeedId,name,email} = req.body;

  try {
    let AddComment = await FeedsModel.findOneAndUpdate(
      {_id:FeedId},
      { comments: [
        {CommentMasg: CommentMsg,CommentAuthor:name,AutherEmail:email}
      ]}
    );

    res.status(200).json({msg: "Comment Added Sucessfully",data:AddComment});
  } catch (err) {
    res
      .status(500)
      .json({msg: "something wents wrong to Comment", err: err});
  }
});





module.exports = {FeedsRouter};

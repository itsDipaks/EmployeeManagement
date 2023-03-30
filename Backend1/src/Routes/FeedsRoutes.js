let {Router} = require("express");
const { FeedsModel } = require("../model/Feeds.model");

let FeedsRouter=Router()


FeedsRouter.post("/addfeed",async(req,res)=>{
    let {
    Massage,name,
      } = req.body;
      try {
        let addfeed = new FeedsModel({
            Massage,name
        });
        
        await addfeed.save();
        res.status(200).json({msg: "Feed Added Sucessfully"});
      } catch (er) {
        res.status(500).json({msg: "something wents wrong to uploading the data"});
      }



})

module.exports={FeedsRouter}
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
    res
      .status(200)
      .send({masg: "All Feeds Data", Allfeeds: Allfeedspost});
  } catch (err) {
    res.status(204).send({msg: "No Data Found ", err: err});
  }
});




module.exports = {FeedsRouter};

const mongoose = require('mongoose');
const AdminSchema =require('../Models/admin')


exports.getAdmin = async(req,res,next)=>{
    const user = await AdminSchema.find({}).sort({ createdAt: -1 });
    console.log(user);
    res.status(200).json(user);
  }

  exports.createAdmin = async (req, res) => {
    const { from, to, date, time, classs, price, route } = req.body;
    try {
      const user = await AdminSchema.create({
        
        from,
        to,
        date,
        time,
        classs,
        price,
        route
        
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ mssg: error.message });
    }
  };

  exports.deleteRouteDetail = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'Invalid ID Format' });
    }
    const RouteDetail = await AdminSchema.findOneAndDelete({ _id: id });

    if (RouteDetail) {
      res.status(200).json(RouteDetail);
    }
    else {
      res.status(404).json({ error: 'No Such Route Exist' });
    }
  };

  exports.findBus = async (req,res) => {
    const {id} = req.params;
    AdminSchema.findOne({_id: id})
    .then((AdminSchema) => {
      res.status(200).json({
        AdminSchema: AdminSchema,
      });
    }).catch((err) =>
    {
    console.error(err);
    });
  }
  
  
  exports.updateBus = async (req,res) => {
    const{id} = req.params;
  
    const newBus = {
      from:req.body.from,
      to:req.body.to,
      date:req.body.date,
      time:req.body.time,
      classs:req.body.classs,
      price:req.body.price,
      route:req.body.route,
    }
  
    AdminSchema.findByIdAndUpdate(id,newBus,function(err,updatedprofile){
      if(err){
        console.log(err);
      }else{
        res.json("Profile Updated")
      }
    }).catch((err) => 
    {
    console.error(err);
    });
  
  }
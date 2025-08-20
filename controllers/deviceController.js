import Device from "../models/device.js"

export const registerDevice = async (req , res) =>{
      const {name,type,status} = req.body;

      try{
        const newDevice = await Device.create({
            name,
            type,
            status,
            owner_id : req.user.id
        });
        res.status(201).json({message:"device created successfully" , device : newDevice});
      }
      catch(e){
        res.status(500).json({message: e.message})
      }
}

export const listDevice = async(req,res) =>{
      try{
        const filters = {};
        if(req.query.type) filters.type = req.query.type;
        if(req.query.status) filters.status = req.query.status;

        const devices = await Device.find({owner_id : req.user.id , ...filters});
        res.status(200).json({sucess:true,devices});
      }
      catch(e){
       res.status(500).json({sucess:false,message:e.message});
      }
}

export const updateDevice = async(req,res) =>{
  
      try{
          const updatedDevice = await Device.findOneAndUpdate(
            {_id:req.params.id , owner_id : req.user.id},
            req.body,
            {new:true});

        if(!updatedDevice) return res.status(404).json({sucess:false,message:"device not found"});

        res.status(200).json({sucess:true, device : updatedDevice});
      }
      catch(e){
        res.status(500).json({ success: false, message: e.message });
      }

}

export const deleteDevice = async(req,res) =>{
      try{
       const deletedDevice = await Device.findOneAndDelete({_id:req.params.id , owner_id : req.user.id});

       if(!deletedDevice) return res.status(404).json({sucess:false,message:"no device found"});

       res.json({sucess:true,message:"device deleted suceessfully"});
      }
      catch(e){
        res.status(500).json({success:false,message:e.message});
      }
}

export const deviceHeartbeat = async (req, res) => {
  try {
    const updatedDevice = await Device.findOneAndUpdate(
      { _id: req.params.id, owner_id: req.user.id },
      { last_active_at: new Date() },
      { new: true }
    );

    if (!updatedDevice) return res.status(404).json({ success: false, message: "Device not found" });
    res.json({ success: true, device: updatedDevice });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
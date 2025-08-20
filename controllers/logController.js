import Log from "../models/log.js";
import Device from "../models/device.js";
import mongoose from "mongoose";

export const createLog = async (req, res) => {
  try {
    const { event, value } = req.body;

    const device = await Device.findOne({ _id: req.params.id, owner_id: req.user.id });
    if (!device) return res.status(404).json({ success: false, message: "Device not found" });

    const newLog = await Log.create({
      device_id: req.params.id,
      event,
      value
    });

    res.status(201).json({ success: true, log: newLog });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};


export const getLogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;

    const logs = await Log.find({ device_id: req.params.id })
      .sort({ timestamp: -1 })
      .limit(limit);

    res.json({ success: true, logs });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

export const getUsage = async (req, res) => {
  try {
    const range = req.query.range || "24h";
    let startTime = new Date();

    if (range.endsWith("h")) {
      const hours = parseInt(range.replace("h", ""));
      startTime.setHours(startTime.getHours() - hours);
    } else if (range.endsWith("d")) {
      const days = parseInt(range.replace("d", ""));
      startTime.setDate(startTime.getDate() - days);
    }

    const result = await Log.aggregate([
      { $match: { device_id: new mongoose.Types.ObjectId(req.params.id), timestamp: { $gte: startTime } } },
      { $group: { _id: "$device_id", total_units: { $sum: "$value" } } }
    ]);

    res.json({
      success: true,
      device_id: req.params.id,
      total_units_last: result.length > 0 ? result[0].total_units : 0,
      range
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

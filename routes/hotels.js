import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "./utils/error.js";
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// update
router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
      const deleteHotel = await Hotel.findByIdAndDelete(
        req.params.id
      );
      res.status(200).json("Hotel has been deleted");
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });

//   Get by id
router.get("/:id", async (req, res) => {
    try {
      const findHotel = await Hotel.findById(
        req.params.id,
      );
      res.status(200).json(findHotel);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  });
//  Get All 
router.get("/", async (req, res,next) => {
    
    try {
      const AllHotels = await Hotel.find();
      res.status(200).json(AllHotels);
    } catch (error) {
      next(error)
    }
  });



export default router;

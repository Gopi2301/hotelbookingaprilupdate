import express from "express";
import { createHotel, deleteHotel,getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "./utils/error.js";
const router = express.Router();

// Create
router.post("/", createHotel);

// update
router.put("/:id", updateHotel);

// Delete
router.delete("/:id", deleteHotel)

//   Get by id
router.get("/:id", getHotel)
//  Get All 
router.get("/", getHotels)



export default router;

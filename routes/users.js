import express from "express";
import { createUser, deleteUser,getUser, getUsers, updateUser } from "../controllers/user.js";
import User from "../models/User.js";
import { createError } from "./utils/error.js";
const router = express.Router();

// Create
router.post("/", createUser);

// update
router.put("/:id", updateUser);

// Delete
router.delete("/:id", deleteUser)

//   Get by id
router.get("/:id", getUser)
//  Get All 
router.get("/", getUsers)



export default router;

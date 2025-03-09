import express from "express";
import { addContactMessage, getAllContactMessages, deleteContactMessage } from "../controllers/contactController.js";

const router = express.Router();

// Route to add a new contact message
router.post("/add", addContactMessage);

// Route to get all contact messages
router.get("/all", getAllContactMessages);

// Route to delete a contact message by ID
router.delete("/delete/:id", deleteContactMessage);

export default router;

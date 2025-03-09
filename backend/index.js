import express, { request, response } from "express";
import { PORT, MONGOURL } from "./config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
 
const app = express()
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactRoutes);

mongoose.connect(MONGOURL).then(() => {
    console.log("Connected to the DB");
})
.catch((error) => {
    console.log(error);
})

app.use("/api/users", userRoutes);
app.use("/api/contact" , contactRoutes);

app.listen(PORT, () => {
    console.log(`App is listning to port  : ${PORT}`);
})
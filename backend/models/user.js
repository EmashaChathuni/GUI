import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
        },
        email : {
            type : String,
            required : true,
        },
        mnumber : {
            type : String,
            required : true,
        },
        password : {
            type : String,
            required : true,
        },
    }
)

export const user = mongoose.model("User", userSchema);
import mongoose from "mongoose";
import {UPLOAD_STATUS} from '../Utils/constants.js'

const DishSchema = new mongoose.Schema(
    {
        name: String,
        price: String,
        category: String,
        newPrice: String,
        quantity:String,
        desc: String,
        status:String,
        imageUrl:{
            type:String
        },
        rate: String,
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },

    { timestamps: true }
);
export default mongoose.model("Dishes", DishSchema);
import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
    {
        reserveName: String,
        reserveDate: String,
        reserveTime: String,
        reserveMember: String,
        reserveNote: String,

        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    },

    { timestamps: true }
);

export default mongoose.model("Reservation", ReservationSchema);

import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
   
    },
    { timestamps: true }
);

CustomerSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model("Customer", CustomerSchema);
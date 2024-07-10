import Customer from "../Models/CustomerModel.js";

export const getUserRole = async (req, res) => {
    const { email: userEmail } = req.params;
    console.log(userEmail);
    const user = await Customer.findOne({ email: userEmail });
    if (!user) {
        return res.status(404).json({ msg: `no user with email ${userEmail}` });
    }
    res.status(200).json({ user });
};

export const getCurrentUser = async (req, res) => {
    const user = await Customer.findOne({ _id: req.user.userId });
    // const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: user});
};  ``
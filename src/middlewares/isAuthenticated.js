import usersModel from "../models/users.model";

const isAuthenticated = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existUser = await usersModel.findOne(res, "email", email);

    if (!existUser) {
      return res.status(400).json({ message: "Tài khoản không tồn tại" });
    }

    if (!usersModel.authenticate(password, existUser.password)) {
      return res.status(400).json({ message: "Mật khẩu không chính xác" });
    }
  } catch (error) {
    res.status(400).json({ message: "Login faileds", error });
  }

  next();
};

export default isAuthenticated;

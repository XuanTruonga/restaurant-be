import { responseError, responseSuccess } from "../helpers/response";

import usersModel from "../models/users.model";
import AuthValidator from "../validators/auth.validator";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existUser = await usersModel.findOne(res, "email", email);

    if (!existUser) {
      return res.status(400).json({ message: "Tài khoản không tồn tại" });
    }

    if (!usersModel.authenticate(password, existUser.password)) {
      return res.status(400).json({ message: "Mật khẩu không chính xác" });
    }

    const token = jwt.sign({ ...existUser }, process.env.SECRETKEY, {});
    const { password: userPassword, ...user } = existUser;

    const data = {
      message: "Đăng nhập thành công.",
      data: {
        token: token,
        data: user,
      },
    };

    responseSuccess(res, data);
  } catch (error) {
    res.status(400).json({ message: "Login faileds", error });
  }
};

export const getAll = async (req, res) => {
  try {
    return await usersModel.read(res);
  } catch (error) {
    return responseError(res, error);
  }
};

export const create = async (req, res) => {
  try {
    const { password, ...remaningBody } = req.body;
    const { error, value } = AuthValidator.validatorRegister(req.body);

    console.log("🚀 ~ create ~ error:", error);

    const bcryptPassword = await usersModel.bcryptPassword(password);

    const data = {
      password: bcryptPassword,
      ...remaningBody,
    };

    return await usersModel.create(data, (error, result) => {
      console.log("error", error);
      if (error) {
        return responseError(res, error);
      }
      console.log("result", result);

      const response = {
        data: result,
        message: "Tạo mới người dùng thành công",
      };
      responseSuccess(res, response);
    });
  } catch (error) {
    return responseError(res, error);
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findOne(res, "id", id);

    const data = {
      message: "Lấy dữ liệu thành công",
      data: await user,
    };
    console.log(data);
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

export const authorization = () => {
  try {
  } catch (error) {
    res.status(400).json({ message: "wrong Token", error });
  }
};

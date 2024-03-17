import { responseError, responseSuccess } from "../helpers/response";

import usersModel from "../models/users.model";
import AuthValidator from "../validators/auth.validator";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existUser = await usersModel.findOne("username", username);

    if (!existUser) {
      return res.status(400).json({ message: "Tài khoản không tồn tại" });
    }
    const { password: hashPassword, ...remaningUser } = existUser;

    if (!usersModel.authenticate(password, hashPassword)) {
      return res.status(400).json({ message: "Mật khẩu không chính xác" });
    }

    const token = jwt.sign({ ...existUser }, process.env.SECRETKEY, {
      expiresIn: "10h",
    });

    const data = {
      message: "Đăng nhập thành công.",
      data: {
        token: token,
        user: remaningUser,
      },
    };

    responseSuccess(res, data);
  } catch (error) {
    res.status(400).json({ message: "Đăng nhập thất bại", error });
  }
};

export const getAll = async (req, res) => {
  try {
    const users = await usersModel.read();
    const data = {
      message: "Lấy danh sách thành công.",
      data: users,
    };
    responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

export const create = async (req, res) => {
  try {
    const { password, ...remaningBody } = req.body;
    const { error } = AuthValidator.validatorRegister(req.body);
    if (error) {
      return responseError(res, error);
    }

    const bcryptPassword = await usersModel.bcryptPassword(password);

    const data = {
      password: bcryptPassword,
      ...remaningBody,
      isLock: false,
    };

    const result = await usersModel.create(data);

    const response = {
      data: result,
      message: "Tạo mới người dùng thành công",
    };
    responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const body = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const updatedUser = await usersModel.update("id", id, body);
    console.log("🚀 ~ updatedUser:", updatedUser);
    return responseSuccess(res, updatedUser);
  } catch (error) {
    return responseError(res, error);
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await usersModel.findOne("id", id);
    const { password, ...remaningUser } = user;
    const data = {
      message: "Lấy dữ liệu thành công",
      data: remaningUser,
    };
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

export const verifyToken = (req, res) => {
  try {
    const user = res.locals.myData;
    const { password, ...remaningUser } = user;
    const data = {
      message: "Lấy dữ liệu thành công",
      data: remaningUser,
    };
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

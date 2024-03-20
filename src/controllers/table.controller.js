import { responseError, responseSuccess } from "../helpers/response";
import tableModel from "../models/table.model";

export const getAll = async (req, res) => {
  try {
    const table = await tableModel.read();
    const data = {
      message: "Lấy danh sách thành công.",
      data: table,
    };
    responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

export const create = async (req, res) => {
  try {
    const body = req.body;
    // const { error } = AuthValidator.validatorRegister(req.body);
    // if (error) {
    //   return responseError(res, error);
    // }

    const result = await tableModel.create(body);

    const response = {
      data: result,
      message: "Tạo phòng bàn thành công",
    };
    responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedtable = await tableModel.update("id", id, body);
    const response = {
      message: "Cập nhật dữ liệu thành công",
      data: updatedtable,
    };
    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const table = await tableModel.findOne("id", id);

    const data = {
      message: "Lấy dữ liệu thành công",
      data: table,
    };
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const table = await tableModel.delete(id);
    const data = {
      message: "Xóa dữ liệu thành công",
      data: table,
    };
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

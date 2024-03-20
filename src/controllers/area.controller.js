import { responseError, responseSuccess } from "../helpers/response";
import areaModel from "../models/area.modal";

export const getAll = async (req, res) => {
  try {
    const area = await areaModel.read();
    const data = {
      message: "Lấy danh sách thành công.",
      data: area,
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

    const result = await areaModel.create(body);

    const response = {
      data: result,
      message: "Tạo khu vực thành công",
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
    const updatedarea = await areaModel.update("id", id, body);
    const response = {
      message: "Cập nhật dữ liệu thành công",
      data: updatedarea,
    };
    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const area = await areaModel.findOne("id", id);

    const data = {
      message: "Lấy dữ liệu thành công",
      data: area,
    };
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

export const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const area = await areaModel.delete(id);
    const data = {
      message: "Xóa dữ liệu thành công",
      data: area,
    };
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

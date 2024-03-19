import { STATUS } from "../config/status";
import {
  ErrorHandler,
  responseError,
  responseSuccess,
} from "../helpers/response";
import productModel from "../models/product.modal";

export const getAll = async (req, res) => {
  try {
    const product = await productModel.read();
    const data = {
      message: "Lấy danh sách thành công.",
      data: product,
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

    const result = await productModel.create(body);

    const response = {
      data: result,
      message: "Tạo mới sản phẩm thành công",
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
    const product = await productModel.findOne("id", id);
    if (!product || product?.length === 0) {
      const error = new ErrorHandler(
        STATUS.NOT_FOUND,
        "không tìm thấy sản phẩm"
      );
      return responseError(res, error);
    }
    
    const updatedProduct = await productModel.update("id", id, body);
    const response = {
      message: "Cập nhật dữ liệu thành công",
      data: updatedProduct,
    };
    return responseSuccess(res, response);
  } catch (error) {
    return responseError(res, error);
  }
};

export const findById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await productModel.findOne("id", id);
    if (!product || product?.length === 0) {
      const error = new ErrorHandler(
        STATUS.NOT_FOUND,
        "không tìm thấy sản phẩm"
      );
      return responseError(res, error);
    }

    const data = {
      message: "Lấy dữ liệu thành công",
      data: product[0],
    };
    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

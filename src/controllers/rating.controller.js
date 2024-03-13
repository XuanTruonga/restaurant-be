import { responseError, responseSuccess } from "../helpers/response";
import ratingModel from "../models/rating.model";

export const create = async (req, res) => {
  try {
    const data = req.body;
    const countComment = await ratingModel.countRating(data.user_id);
    const comment = countComment[0].comment_count;
    console.log(comment);
    if (comment >= 5) {
      const error = {
        message: "Người dùng bình luận quá nhiều lần",
      };
      return responseError(res, error);
    }
    const created_at = new Date();
    const updated_at = new Date();
    const body = {
      ...data,
      created_at,
      updated_at,
    };

    return await ratingModel.create(res, body);
  } catch (error) {
    return responseError(res, error);
  }
};

export const findRatingsByBookId = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await ratingModel.findRatingsByBookId(id);

    const data = {
      message: "Lấy dữ liệu thành công",
      data: rating,
    };

    return responseSuccess(res, data);
  } catch (error) {
    return responseError(res, error);
  }
};

export const getAll = async (req, res) => {
  try {
    return await ratingModel.read(res);
  } catch (error) {
    return responseError(res, error);
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const created_at = new Date();
    const updated_at = new Date();
    const body = {
      ...data,
      created_at,
      updated_at,
    };
    const updatedBook = await ratingModel.update("id", id, body);
    return responseSuccess(res, updatedBook);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Lỗi trong quá trình cập nhật dữ liệu", error });
  }
};

export const deleteRatings = async (req, res) => {
  try {
    const { id } = req.params;
    return await ratingModel.delete(res, id);
  } catch (error) {
    return responseError(res, error);
  }
};

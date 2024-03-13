import { connection } from "../Database";
import BaseModel from "./base.model";

class RatingModel extends BaseModel {
  constructor() {
    super({
      table: "ratings",
      fillable: [
        "id",
        "user_id",
        "book_id",
        "rating",
        "review",
        "created_at",
        "updated_at",
      ],
    });
  }

  async findRatingsByBookId(bookId) {
    const query = `
      SELECT ${this.table}.id AS id, ${this.table}.rating, ${this.table}.review,
       ${this.table}.book_id,
      users.id AS user_id, users.full_name
      FROM ${this.table}
      LEFT JOIN users ON ${this.table}.user_id = users.id
      WHERE book_id = ?
    `;

    return new Promise((resolve, reject) => {
      connection.query(query, [bookId], (error, results) => {
        if (error) {
          return reject(error);
        }

        resolve(results);
      });
    });
  }

  async countRating(user_id) {
    const query = `SELECT COUNT(${this.table}.id) AS comment_count
      FROM ${this.table}
      WHERE ${this.table}.user_id = ?`;

    return new Promise((resolve, reject) => {
      connection.query(query, [user_id], (error, results) => {
        if (error) {
          return reject(error);
        }

        resolve(results);
      });
    });
  }
}

export default new RatingModel();

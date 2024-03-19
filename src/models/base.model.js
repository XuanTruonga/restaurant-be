import { connection } from "../Database";
import { responseError, responseSuccess } from "../helpers/response";

class BaseModel {
  constructor(props) {
    this.table = props.table;
    this.fillable = props.fillable;
    this.placeholders = this.fillable.map(() => "?").join(", ");
  }

  // Get All
  async read() {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * from ${this.table}`, (error, result) => {
        this.hanldeResult(resolve, reject, error, result);
      });
    });
  }

  // Create *
  async create(data) {
    const fields = this.fillable.join(", ");
    const placeholders = this.placeholders;

    const values = this.fillable.map((field) => data[field]);

    const query = `INSERT INTO ${this.table} (${fields}) VALUES (${placeholders})`;

    return new Promise((resolve, reject) => {
      connection.query(query, values, (error, result) => {
        this.hanldeResult(resolve, reject, error, result);
      });
    });
  }

  // find One by cloumn name
  async findOne(columnName, columnValue) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM ${this.table} WHERE ${columnName} = ?`;

      connection.query(query, [columnValue], (error, result) => {
        this.hanldeResult(resolve, reject, error,result);
      });
    });
  }

  // update
  async update(columnName, columnValue, data) {
    return new Promise((resolve, reject) => {
      const updates = Object.keys(data).map((field) => `${field} = ?`);

      const toStringUpdates = updates.join(", ");

      const values = Object.values(data);
      const query = `UPDATE ${this.table} SET ${toStringUpdates} WHERE ${columnName} = ?`;

      connection.query(query, [...values, columnValue], (error, result) => {
      
        this.hanldeResult(resolve, reject, error, result);
      });
    });
  }

  // Delete
  async delete(res, id) {
    const query = `DELETE FROM ${this.table} WHERE id = ?`;

    connection.query(query, [id], (error, result) => {
      if (error) {
        return responseError(res, error);
      }

      const data = {
        message: "Xóa thành công.",
      };

      return responseSuccess(res, data);
    });
  }

  hanldeResult(resolve, reject, error, result) {
    if (error) {
      console.log("🚀 ~ error:", error);
      return reject(error);
    }
    return resolve(result);
  }
}

export default BaseModel;

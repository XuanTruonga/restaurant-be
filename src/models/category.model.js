import BaseModel from "./base.model";

class CategoryModel extends BaseModel {
  constructor() {
    super({
      table: "category",
      fillable: ["name", "note"],
    });
  }
}

export default new CategoryModel();

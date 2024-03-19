import BaseModel from "./base.model";

class productModel extends BaseModel {
  constructor() {
    super({
      table: "product",
      fillable: [
        "name",
        "price",
        "image",
        "description",
        "categoryId",
        "quantity",
        "cost",
      ],
    });
  }
}

export default new productModel();

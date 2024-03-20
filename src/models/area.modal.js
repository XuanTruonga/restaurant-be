import BaseModel from "./base.model";

class AreaModel extends BaseModel {
  constructor() {
    super({
      table: "area",
      fillable: ["name", "note"],
    });
  }
}

export default new AreaModel();

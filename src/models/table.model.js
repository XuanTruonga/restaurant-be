import BaseModel from "./base.model";

class TableModel extends BaseModel {
  constructor() {
    super({
      table: "tableEat",
      fillable: ["name", "note", "seat", "areaId", "status"],
    });
  }
}

export default new TableModel();

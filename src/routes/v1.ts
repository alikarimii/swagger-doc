import { Express } from "express";
import index from "../index/index.controller";
export default (api: Express) => {
  api.use("/index", index.router);
};

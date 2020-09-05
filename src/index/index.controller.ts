import { Router, Request, Response } from "express";

class IndexController {
  router: Router = Router();
  constructor() {
    this.route();
  }
  route() {
    this.router.get("/jwt", this.jwt.bind(this));
    // this.router.get('/image', this.jwt.bind(this))
  }
  private jwt(req: Request, res: Response) {
    return res.json("ok");
  }
}

export default new IndexController();

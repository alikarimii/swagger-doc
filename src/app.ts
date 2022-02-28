import express from "express";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser";
import { CORS } from "./secret";
import { resolve } from "path";
import * as appRoot from "app-root-path";
import route from "./routes/v1";
import cors from 'cors'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(cors({
  origin(origin: string | undefined, cb: (err: Error | null, allow: boolean) => void) {
    origin = origin ? origin : ''
    const whiteList = CORS ? CORS.split(',') : []
    cb(null, whiteList.indexOf(origin) !== -1)
  },
  credentials: true
}) as any);
app.use(compression() as any);
app.use(helmet());
app.use("/", express.static(resolve(appRoot.path, "./build/public")));
// all route
route(app);

export default app;

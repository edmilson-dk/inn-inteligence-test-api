import { Router } from "express";

const routes = Router();

routes.get("/test", (_, res) => res.send({ ok: true }));

export default routes;
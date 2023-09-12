import { Hono } from "hono";
import { handle } from "hono/vercel";

import { defineRoute } from "../src/utils/handler";
import { routeHello } from "../src/routes/hello";

export const config = {
  runtime: "edge",
};

export const app = new Hono().basePath("/api");

const routes: Array<ReturnType<typeof defineRoute>> = [routeHello];

routes.forEach((r) => r(app));

export default process.env.NODE_ENV === "development" ? app : handle(app);

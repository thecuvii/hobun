import { defineRoute } from "../../utils/handler";
import { GET } from "./GET";

export const routeHello = defineRoute((app) => {
  app.get("/hello", GET);
  console.log("define");
});

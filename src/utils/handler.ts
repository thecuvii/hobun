import { Context } from "hono";
import { app as rootApp } from "../../api/[...index]";

export const defineRoute = (route: (app: typeof rootApp) => void) => route;
export const defineHandler = (handler: (context: Context) => any) => handler;

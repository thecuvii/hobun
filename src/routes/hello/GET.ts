import { defineHandler } from "../../utils/handler";

export const GET = defineHandler((c) => c.json({ message: "hello world1" }));

import { Router } from "https://deno.land/x/oak/mod.ts";
import { login } from "./auth.ts";

const router = new Router();
router.post("/login", login);

export default router;

import { Router } from "express"

import handleError from "@/middlewares/handlerErrorMiddleware"

const router = Router()

router.get("/health", (req, res) => res.send("OK")).use(handleError)

export default router

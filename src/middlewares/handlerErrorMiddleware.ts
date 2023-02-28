import { Request, Response, NextFunction } from "express"

import { AppError } from "@/errors"

const handleError = (
	err: AppError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.error(err)

	err instanceof AppError
		? res.status(err.code).send({
				error: {
					message: err.message,
					...(err.type && { type: err.type }),
				},
		  })
		: res.status(500).send("Internal server error")
}

export default handleError

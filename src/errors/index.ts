import { HTTP_STATUS_CODE } from "./ErrorTypes"

class AppError {
	public readonly code: number
	public readonly type?: string
	public readonly message: string

	constructor(code: number, message: string, type?: string) {
		this.code = code
		this.type = type
		this.type = this.message = message
	}
}
class UnprocessableEntityError extends AppError {
	constructor(message: string) {
		super(HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY, message)
	}
}

export { AppError, UnprocessableEntityError }

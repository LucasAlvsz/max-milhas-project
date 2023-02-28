import { HTTP_STATUS_CODE, CPFErrorTypes } from "./ErrorTypes"

class AppError {
	public readonly code: number
	public readonly type?: string
	public readonly message: string

	constructor(code: number, message: string, type?: string) {
		this.code = code
		this.type = type
		this.message = message
	}
}
class UnprocessableEntityError extends AppError {
	constructor(message: string) {
		super(HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY, message)
	}
}

class InvalidCpfException extends AppError {
	constructor(message: string) {
		super(
			HTTP_STATUS_CODE.UNPROCESSABLE_ENTITY,
			message,
			CPFErrorTypes.InvalidCpfException
		)
	}
}

class ExistsCpfException extends AppError {
	constructor(message: string) {
		super(
			HTTP_STATUS_CODE.CONFLICT,
			message,
			CPFErrorTypes.ExistsCpfException
		)
	}
}

class NotFoundCpfException extends AppError {
	constructor(message: string) {
		super(
			HTTP_STATUS_CODE.NOT_FOUND,
			message,
			CPFErrorTypes.NotFoundCpfException
		)
	}
}

export {
	AppError,
	UnprocessableEntityError,
	InvalidCpfException,
	ExistsCpfException,
	NotFoundCpfException,
}

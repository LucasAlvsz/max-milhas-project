const CPFErrorTypes = {
	InvalidCpfException: "InvalidCpfException" as const,
	ExistsCpfException: "ExistsCpfException" as const,
	NotFoundCpfException: "NotFoundCpfException" as const,
}

const HTTP_STATUS_CODE = {
	OK: 200,
	CREATED: 201,
	UNAUTHORIZED: 401,
	NOT_FOUND: 404,
	CONFLICT: 409,
	UNPROCESSABLE_ENTITY: 422,
	INTERNAL_SERVER_ERROR: 500,
}

export { CPFErrorTypes, HTTP_STATUS_CODE }

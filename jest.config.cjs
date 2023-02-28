// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: ".env.test" })
module.exports = {
	roots: ["<rootDir>/tests"],
	collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
	coverageDirectory: "coverage",
	testEnvironment: "node",
	transform: {
		".+\\.ts$": "ts-jest",
	},
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
}

module.exports = {
	roots: ["<rootDir>"],
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

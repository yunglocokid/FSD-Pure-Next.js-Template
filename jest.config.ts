import type { Config } from "jest"

import nextJest from "next/jest.js"

const createJestConfig = nextJest({
	dir: "./",
})

const config: Config = {
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	moduleNameMapper: {
		"@app/(.*)$": "<rootDir>/src/app/$1",
		"@entities/(.*)$": "<rootDir>/src/entities/$1",
		"@features/(.*)$": "<rootDir>/src/features/$1",
		"@pages/(.*)$": "<rootDir>/src/pages/$1",
		"@shared/(.*)$": "<rootDir>/src/shared/$1",
		"@widgets/(.*)$": "<rootDir>/src/widgets/$1",
		"@/(.*)$": "<rootDir>/src/$1",
	},
}

export default createJestConfig(config)

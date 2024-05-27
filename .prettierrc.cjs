// @ts-check

module.exports = {
	// Standard prettier options
	trailingComma: "all",
	tabWidth: 2,
	useTabs: true,
	singleQuote: false,
	jsxSingleQuote: false,
	semi: false,

	plugins: ["@ianvs/prettier-plugin-sort-imports"],

	importOrder: [
		"<TYPES>",
		"",
		"react",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^(@shared|@entities|@features|@widgets|@pagesLayer|@app)(/.*)$",
		"",
		"^(?!.*[.]scss$)[./].*$",
		".scss$",
		"^[.]",
	],
	importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
	importOrderTypeScriptVersion: "5.0.0",
}

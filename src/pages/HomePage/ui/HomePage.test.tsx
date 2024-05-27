import "@testing-library/jest-dom"

import { render, screen } from "@testing-library/react"

import HomePage from "./HomePage"

describe("Page", () => {
	test("renders a yunglocokid", () => {
		render(<HomePage />)
		const yunglocokid: HTMLElement = screen.getByText("yunglocokid")
		expect(yunglocokid).toBeInTheDocument()
	})
	test("renders a hint", () => {
		render(<HomePage />)
		screen.debug()
		const hint: HTMLElement = screen.getByTestId("hint-code")
		expect(hint).toBeInTheDocument()
	})
})

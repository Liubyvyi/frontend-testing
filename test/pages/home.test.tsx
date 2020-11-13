import React from "react"
import { render } from "@testing-library/react"

import { Home } from "@pages/home"

describe("Home page", () => {
  it("should match snapshot", () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })
})

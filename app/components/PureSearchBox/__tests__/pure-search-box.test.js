import * as React from "react";
import { PureSearchBox } from ".";

import renderer from "react-test-renderer";

describe("PureSearchBox", () => {
  it("renders", () => {
    const mockSearchCall = jest.fn();
    const searchTerm = "";

    const jsx = (
      <PureSearchBox setSearch={mockSearchCall} searchTerm={searchTerm} />
    );

    const rendered = renderer.create(jsx);

    expect(rendered).toMatchSnapshot();
  });
});

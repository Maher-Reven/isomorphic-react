import React from "react";
import TagsList from "../TagsList";
import rerenderer from "react-test-renderer";

describe("The tags list", () => {
  it("renders as expected", () => {
    const tree = rerenderer
      .create(<TagsList tags={["css", "html", "swift"]} />)
      .toJSON();

    expect(tree).toMatchInlineSnapshot(`
      <div>
        <code>
          css
        </code>
        <code>
          html
        </code>
        <code>
          swift
        </code>
      </div>
    `);
  });
});

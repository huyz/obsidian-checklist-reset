import { describe, expect, it } from "vitest";

import { getMarkdownSelectionToReset } from "./getMarkdownSelectionToReset";

describe("getMarkdownSelectionToReset", () => {
  it("returns the original selection when text is selected", () => {
    const selection = {
      anchor: { line: 1, ch: 2 },
      head: { line: 1, ch: 8 },
    };

    expect(getMarkdownSelectionToReset(selection, 10)).toEqual(selection);
  });

  it("returns the original selection for multi-line selections", () => {
    const selection = {
      anchor: { line: 1, ch: 2 },
      head: { line: 3, ch: 0 },
    };

    expect(getMarkdownSelectionToReset(selection, 10)).toEqual(selection);
  });

  it("expands a collapsed cursor to a full-line selection", () => {
    expect(
      getMarkdownSelectionToReset(
        {
          anchor: { line: 1, ch: 4 },
          head: { line: 1, ch: 4 },
        },
        10
      )
    ).toEqual({
      anchor: { line: 1, ch: 0 },
      head: { line: 1, ch: 10 },
    });
  });
});

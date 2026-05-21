import { describe, expect, it } from "vitest";

import {
  getRestoredCursorPosition,
  shouldRestoreCursorAfterReset,
} from "./cursorRestore";

describe("cursorRestore", () => {
  describe("getRestoredCursorPosition", () => {
    it("clamps the restored cursor column using the updated line length after reset", () => {
      const selection = {
        anchor: { line: 2, ch: 20 },
        head: { line: 2, ch: 20 },
      };

      expect(getRestoredCursorPosition(selection, 8)).toEqual({
        line: 2,
        ch: 8,
      });
    });

    it("keeps the original cursor column when it is within the updated line length", () => {
      const selection = {
        anchor: { line: 1, ch: 4 },
        head: { line: 1, ch: 4 },
      };

      expect(getRestoredCursorPosition(selection, 10)).toEqual({
        line: 1,
        ch: 4,
      });
    });
  });

  describe("shouldRestoreCursorAfterReset", () => {
    it("returns true for exactly one collapsed selection", () => {
      expect(
        shouldRestoreCursorAfterReset([
          {
            anchor: { line: 0, ch: 3 },
            head: { line: 0, ch: 3 },
          },
        ])
      ).toBe(true);
    });

    it("returns false for a single expanded selection", () => {
      expect(
        shouldRestoreCursorAfterReset([
          {
            anchor: { line: 0, ch: 1 },
            head: { line: 0, ch: 4 },
          },
        ])
      ).toBe(false);
    });

    it("returns false when there are multiple collapsed selections", () => {
      const selections = [
        {
          anchor: { line: 0, ch: 3 },
          head: { line: 0, ch: 3 },
        },
        {
          anchor: { line: 1, ch: 4 },
          head: { line: 1, ch: 4 },
        },
      ];

      expect(shouldRestoreCursorAfterReset(selections)).toBe(false);
    });
  });
});

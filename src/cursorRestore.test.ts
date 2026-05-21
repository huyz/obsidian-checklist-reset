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
  });

  describe("shouldRestoreCursorAfterReset", () => {
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

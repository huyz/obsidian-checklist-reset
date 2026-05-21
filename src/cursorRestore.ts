import type { EditorPosition, EditorSelection } from "obsidian";

export function shouldRestoreCursorAfterReset(
  selections: EditorSelection[]
): boolean {
  if (selections.length !== 1) {
    return false;
  }

  const selection = selections[0];
  return (
    selection.anchor.line === selection.head.line &&
    selection.anchor.ch === selection.head.ch
  );
}

export function getRestoredCursorPosition(
  selection: EditorSelection,
  updatedLineLength: number
): EditorPosition {
  return {
    line: selection.head.line,
    ch: Math.min(selection.head.ch, updatedLineLength),
  };
}

import type { EditorPosition, EditorSelection } from "obsidian";

export function shouldRestoreCursorAfterReset(
  selectedText: EditorSelection[]
): boolean {
  if (selectedText.length !== 1) {
    return false;
  }

  const selection = selectedText[0];
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

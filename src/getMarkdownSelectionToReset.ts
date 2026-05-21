import type { EditorSelection } from "obsidian";

export function getMarkdownSelectionToReset(
  selection: EditorSelection,
  lineLength: number
): EditorSelection {
  const hasTextSelected =
    selection.anchor.line !== selection.head.line ||
    selection.anchor.ch !== selection.head.ch;

  if (hasTextSelected) {
    return selection;
  }

  const line = selection.head.line;
  return {
    anchor: { line, ch: 0 },
    head: { line, ch: lineLength },
  };
}

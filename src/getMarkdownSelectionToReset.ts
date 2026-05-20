import { EditorPositionLike, EditorSelectionLike } from "./types";

export function getMarkdownSelectionToReset(
  selection: EditorSelectionLike,
  cursor: EditorPositionLike,
  lineLength: number
): EditorSelectionLike {
  const hasSelection =
    selection.anchor.line !== selection.head.line ||
    selection.anchor.ch !== selection.head.ch;

  if (hasSelection) {
    return selection;
  }

  return {
    anchor: { line: cursor.line, ch: 0 },
    head: { line: cursor.line, ch: lineLength },
  };
}

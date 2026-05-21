type Position = {
  line: number;
  ch: number;
};

type Selection = {
  anchor: Position;
  head: Position;
};

type EditorLike = {
  getLine: (line: number) => string;
  setCursor: (position: Position) => void;
};

export function restoreCursorAfterReset(
  editor: EditorLike,
  selection: Selection,
  selectionCount: number
) {
  const isCollapsed =
    selection.anchor.line === selection.head.line &&
    selection.anchor.ch === selection.head.ch;

  if (!isCollapsed || selectionCount !== 1) {
    return;
  }

  const updatedLineLength = editor.getLine(selection.head.line).length;
  editor.setCursor({
    line: selection.head.line,
    ch: Math.min(selection.head.ch, updatedLineLength),
  });
}

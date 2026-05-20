export type ChecklistResetSettings = {
  deleteTextOnReset: string;
};

export type EditorPosition = {
  line: number;
  ch: number;
};

export type EditorSelection = {
  anchor: EditorPosition;
  head: EditorPosition;
};

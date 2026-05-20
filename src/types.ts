export type ChecklistResetSettings = {
  deleteTextOnReset: string;
};

export type EditorPositionLike = {
  line: number;
  ch: number;
};

export type EditorSelectionLike = {
  anchor: EditorPositionLike;
  head: EditorPositionLike;
};

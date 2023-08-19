import { CreateMsg, UpdateMsg, DeleteMsg, MsgHandlerTuple } from "./types";

const handleCreateColumn = (data: CreateMsg): void => {
  console.info(data);
};

const handleUpdateColumn = (data: UpdateMsg): void => {
  console.info(data);
};

const handleDeleteColumn = (data: DeleteMsg): void => {
  console.info(data);
};

export const handlers: MsgHandlerTuple[] = [
  ["create-column", handleCreateColumn],
  ["delete-column", handleDeleteColumn],
  ["update-column", handleUpdateColumn],
];

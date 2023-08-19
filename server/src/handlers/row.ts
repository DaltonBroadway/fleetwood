import { CreateMsg, UpdateMsg, DeleteMsg, MsgHandlerTuple } from "./types";

const handleCreateRow = (data: CreateMsg): void => {
  console.info(data);
};

const handleUpdateRow = (data: UpdateMsg): void => {
  console.info(data);
};

const handleDeleteRow = (data: DeleteMsg): void => {
  console.info(data);
};

export const handlers: MsgHandlerTuple[] = [
  ["create-row", handleCreateRow],
  ["delete-row", handleDeleteRow],
  ["update-row", handleUpdateRow],
];

import { CreateMsg, UpdateMsg, DeleteMsg, MsgHandlerTuple } from "./types";

const handleCreateSheet = (data: CreateMsg): void => {
  console.info(data);
};

const handleUpdateSheet = (data: UpdateMsg): void => {
  console.info(data);
};

const handleDeleteSheet = (data: DeleteMsg): void => {
  console.info(data);
};

export const handlers: MsgHandlerTuple[] = [
  ["create-sheet", handleCreateSheet],
  ["delete-sheet", handleDeleteSheet],
  ["update-sheet", handleUpdateSheet],
];

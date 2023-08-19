import { CreateMsg, UpdateMsg, DeleteMsg, MsgHandlerTuple } from "./types";

const handleCreateCell = (data: CreateMsg): void => {
  console.info(data);
};

const handleUpdateCell = (data: UpdateMsg): void => {
  console.info(data);
};

const handleDeleteCell = (data: DeleteMsg): void => {
  console.info(data);
};

export const handlers: MsgHandlerTuple[] = [
  ["create-cell", handleCreateCell],
  ["delete-cell", handleDeleteCell],
  ["update-cell", handleUpdateCell],
];
